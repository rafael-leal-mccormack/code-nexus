"use client";
import { NexusSnippet } from 'code-nexus-react';
import React, { useEffect, useRef, useState } from 'react';

interface CodeSnippetProps {
  code: string;
  language?: 'js' | 'html' | 'css';
  theme?: 'dark' | 'light';
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'nexus-snippet': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        content?: string;
        type?: 'js' | 'html' | 'css';
        theme?: any;
      };
    }
  }
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ 
  code, 
  language = 'js',
  theme = 'dark'
}) => {
  const snippetRef = useRef<HTMLElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [codeContent, setCodeContent] = useState(code);

  useEffect(() => {
    setCodeContent(code);
  }, [code]);

  useEffect(() => {
    // Load the web components
    const loadScript = async () => {
      try {
        if (typeof window !== 'undefined' && !customElements.get('nexus-snippet')) {
          // In a production app, we'd import the real package
          // For this demo, we'll use a mock implementation
          console.log('Nexus snippet would be loaded here in production');
          setIsLoaded(true);
        } else {
          setIsLoaded(true);
        }
      } catch (error) {
        console.error('Error loading Code Nexus components:', error);
      }
    };

    loadScript();
  }, []);

  // For demo purposes in the docs site, we'll render a styled pre/code block
  // In production with the real component loaded, we'd use the actual nexus-snippet
  return (
    <>
      {isLoaded ? (
        <div className="bg-gray-900 rounded-lg p-4 my-4 overflow-x-auto" key={`snippet-${language}-${codeContent.substring(0, 20)}`}>
          <NexusSnippet
            className='w-full'
            ref={snippetRef as any} 
            content={codeContent}
            type={language}
          ></NexusSnippet>
        </div>
      ) : (
        <div className="bg-gray-900 rounded-lg p-4 my-4 overflow-x-auto" key={`fallback-${language}-${codeContent.substring(0, 20)}`}>
          <pre className={`language-${language}`}>
            <code className="text-gray-300 font-mono text-sm">{codeContent}</code>
          </pre>
        </div>
      )}
    </>
  );
};

export default CodeSnippet; 