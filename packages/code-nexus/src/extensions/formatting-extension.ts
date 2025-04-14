import { Extension } from '@codemirror/state';
import { keymap, EditorView } from '@codemirror/view';
// Uses ESM import syntax
import prettier from 'prettier/standalone';
import htmlParser from 'prettier/parser-html';
import cssParser from 'prettier/parser-postcss';
import babelParser from 'prettier/parser-babel';

// Define plugins for Prettier
const prettierPlugins = {
  html: htmlParser,
  css: cssParser,
  babel: babelParser
};

export interface FormattingOptions {
  printWidth?: number;
  tabWidth?: number;
  useTabs?: boolean;
  semi?: boolean;
  singleQuote?: boolean;
}

/**
 * Creates a formatting extension that can be added to a CodeMirror editor
 * @param options Formatting options
 * @param parser The parser to use for formatting ('html', 'css', or 'babel')
 * @param formatter Optional custom formatting function
 */
export function createFormattingExtension(
  options: FormattingOptions = {},
  parser: string = 'babel',
  formatter?: (code: string, parser: string) => Promise<string>
): Extension {
  // Default formatter implementation using prettier
  const defaultFormatter = async (code: string, parserName: string) => {
    try {
      // Handle both ESM and CommonJS versions of prettier
      const prettierInstance = prettier.format ? prettier : (prettier as any).default;
      
      return prettierInstance.format(code, {
        parser: parserName,
        plugins: Object.values(prettierPlugins),
        printWidth: options.printWidth || 80,
        tabWidth: options.tabWidth || 2,
        useTabs: options.useTabs || false,
        semi: options.semi !== undefined ? options.semi : true,
        singleQuote: options.singleQuote !== undefined ? options.singleQuote : false,
      });
    } catch (error) {
      console.error(`Error formatting with parser ${parserName}:`, error);
      return code; // Return unchanged if formatting fails
    }
  };

  // Use provided formatter or default
  const formatCode = formatter || defaultFormatter;

  // Command to format the entire document
  const formatDocument = (view: EditorView) => {
    // Start formatting asynchronously but return immediately for Command compatibility
    (async () => {
      const doc = view.state.doc.toString();
      try {
        const formatted = await formatCode(doc, parser);
        if (formatted !== doc) {
          view.dispatch({
            changes: { from: 0, to: doc.length, insert: formatted }
          });
        }
      } catch (err) {
        console.error('Formatting error:', err);
      }
    })();
    
    // Return true to indicate the command was handled
    return true;
  };

  // Define keymaps for formatting
  const formatKeymap = keymap.of([
    { key: "Ctrl-Shift-f", run: formatDocument },
    { key: "Cmd-Shift-f", mac: "Cmd-Shift-f", run: formatDocument },
  ]);

  return [formatKeymap];
}

/**
 * Check if Prettier is available
 */
export function isPrettierAvailable(): boolean {
  return !!(prettier || (prettier as any).default);
}

/**
 * Format code using Prettier with the specified parser
 * @param code The code to format
 * @param parser The parser to use ('html', 'css', or 'babel')
 * @param options Formatting options
 * @returns Formatted code
 */
export async function formatCode(
  code: string, 
  parser: string, 
  options: FormattingOptions = {}
): Promise<string> {
  try {
    // Handle both ESM and CommonJS versions of prettier
    const prettierInstance = prettier.format ? prettier : (prettier as any).default;
    
    return prettierInstance.format(code, {
      parser,
      plugins: Object.values(prettierPlugins),
      printWidth: options.printWidth || 80,
      tabWidth: options.tabWidth || 2,
      useTabs: options.useTabs || false,
      semi: options.semi !== undefined ? options.semi : true,
      singleQuote: options.singleQuote !== undefined ? options.singleQuote : false,
    });
  } catch (error) {
    console.error(`Error formatting with parser ${parser}:`, error);
    return code; // Return unchanged if formatting fails
  }
} 