import { useCallback } from 'react';

// This is a placeholder until we have Prettier integrated
// We'll use a CDN version for the demo, but in production you should use the npm package
declare global {
  interface Window {
    prettier: any;
    prettierPlugins: any;
  }
}

type FormatOptions = {
  parser: 'html' | 'css' | 'babel' | 'typescript';
  printWidth?: number;
  tabWidth?: number;
  useTabs?: boolean;
  semi?: boolean;
  singleQuote?: boolean;
};

export const useCodeFormatter = () => {
  const loadPrettier = useCallback(async (): Promise<boolean> => {
    if (typeof window !== 'undefined' && !window.prettier) {
      // Load Prettier core
      const prettierScript = document.createElement('script');
      prettierScript.src = 'https://unpkg.com/prettier@2.8.8/standalone.js';
      prettierScript.async = true;
      document.head.appendChild(prettierScript);
      
      // Load Prettier plugins
      const plugins = [
        { name: 'babel', url: 'https://unpkg.com/prettier@2.8.8/parser-babel.js' },
        { name: 'html', url: 'https://unpkg.com/prettier@2.8.8/parser-html.js' },
        { name: 'postcss', url: 'https://unpkg.com/prettier@2.8.8/parser-postcss.js' },
        { name: 'typescript', url: 'https://unpkg.com/prettier@2.8.8/parser-typescript.js' }
      ];
      
      await Promise.all(plugins.map(plugin => {
        return new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = plugin.url;
          script.async = true;
          script.onload = resolve;
          document.head.appendChild(script);
        });
      }));
      
      // Wait for prettier to be available
      return new Promise((resolve) => {
        const checkPrettier = () => {
          if (window.prettier && window.prettierPlugins) {
            resolve(true);
          } else {
            setTimeout(checkPrettier, 100);
          }
        };
        checkPrettier();
      });
    }
    
    return true;
  }, []);

  const formatCode = useCallback(async (code: string, options: FormatOptions): Promise<string> => {
    try {
      await loadPrettier();
      
      if (!window.prettier) {
        console.error('Prettier failed to load');
        return code;
      }
      
      const formattedCode = window.prettier.format(code, {
        parser: options.parser,
        plugins: window.prettierPlugins,
        printWidth: options.printWidth || 80,
        tabWidth: options.tabWidth || 2,
        useTabs: options.useTabs || false,
        semi: options.semi !== undefined ? options.semi : true,
        singleQuote: options.singleQuote !== undefined ? options.singleQuote : false,
      });
      
      return formattedCode;
    } catch (error) {
      console.error('Error formatting code:', error);
      return code; // Return original code on error
    }
  }, [loadPrettier]);

  return { formatCode };
}; 