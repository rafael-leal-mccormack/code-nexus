"use client";
import React from 'react';
import Link from 'next/link';
import CodeSnippet from '@/components/code-snippet';
import { NexusPanel } from 'code-nexus-react';

// Define the default color object locally
const color = {
  chalky: '#e5c07b',
  coral: '#e06c75',
  cyan: '#56b6c2',
  invalid: '#ffffff',
  ivory: '#abb2bf',
  stone: '#8a91a6',
  malibu: '#61afef',
  sage: '#98c379',
  whiskey: '#d19a66',
  violet: '#c678dd',
  darkBackground: '#1e2227',
  highlightBackground: '#2c313c',
  background: '#282c34',
  tooltipBackground: '#353a42',
  selection: '#3E4451',
  cursor: '#61afef',
};

export default function ThemingPage() {
  // Example code snippets
  const darkThemeExample = `// Using dark theme (default)
<nexus-panel
  type="js"
  content="console.log('Hello from Code Nexus');"
/>`;

  const lightThemeExample = `// Using light theme
<nexus-panel
  type="js"
  content="console.log('Hello from Code Nexus');"
  theme='{ "dark": false }'
/>`;

  const customColorsExample = `// Custom theme colors
import { color } from 'code-nexus';

// Create a custom color palette
const customColors = {
  ...color,
  background: '#1a1a2e',
  cursor: '#ff6b6b',
  malibu: '#4cc9f0',
  sage: '#7bf1a8',
  violet: '#ff9ef5',
  coral: '#ff6b6b'
};

// Apply custom colors
<nexus-panel
  type="js"
  content="console.log('Custom themed code');"
  theme='{ "colors": customColors, "dark": true }'
/>`;

  const reactThemeExample = `// React component with custom theme
import { NexusPanel } from 'code-nexus-react';
import { color } from 'code-nexus';

// Create custom colors
const customColors = {
  ...color,
  background: '#0f172a', // Dark blue background
  selection: '#334155',
  cursor: '#38bdf8'
};

function CodeEditor() {
  return (
    <NexusPanel
      type="js"
      content="function greet() { return 'Hello, developer!'; }"
      theme={{ colors: customColors, dark: true }}
    />
  );
}`;

  // Define the example code content
  const exampleJsCode = `function calculateTotal(items) {
  return items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
}

const cart = [
  { name: "Keyboard", price: 59.99, quantity: 1 },
  { name: "Mouse", price: 29.99, quantity: 1 },
];

console.log("Total: $" + calculateTotal(cart));`;

  // Define the custom theme object (uses the local color object)
  const midnightOceanTheme = {
    ...color,
    background: '#0f1b33',
    darkBackground: '#0a142a',
    highlightBackground: '#1a2e4c',
    tooltipBackground: '#102040',
    cursor: '#4cc9f0',
    selection: '#213b5c',
    ivory: '#e2e8f0',
    stone: '#94a3b8',
    violet: '#ff9ef5',
    malibu: '#4cc9f0',
    sage: '#7bf1a8',
    coral: '#ff2b2b',
    chalky: '#e2e8f0',
    whiskey: '#ffd166',
    cyan: '#38e9e0',
  };

  const midnightOceanThemeCode = `// Midnight Ocean Theme
// import { color } from 'code-nexus'; // Original import

const color = { /* Default color object defined above */ };

const midnightOceanTheme = {
  ...color,
  // Background colors
  background: '#0f1b33',
  darkBackground: '#0a142a',
  highlightBackground: '#1a2e4c',
  tooltipBackground: '#102040',
  
  // UI elements
  cursor: '#4cc9f0',
  selection: '#213b5c',
  ivory: '#e2e8f0',
  stone: '#94a3b8',
  
  // Syntax highlighting
  violet: '#ff9ef5',    // Keywords, operators
  malibu: '#4cc9f0',    // Functions, methods
  sage: '#7bf1a8',      // Strings
  coral: '#ff6b6b',     // Variables, properties
  chalky: '#e2e8f0',    // Classes, types
  whiskey: '#ffd166',   // Numbers, constants
  cyan: '#38e9e0',      // Special tokens
};

// Use the theme
<NexusPanel
  type="js"
  content="${exampleJsCode.substring(0, 100)}..."
  theme={{ colors: midnightOceanTheme, dark: true }}
/>
`;

  return (
    <div className="container mx-auto py-12 px-4">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Theming Guide</h1>
        <p className="text-xl text-gray-300">
          Customize the appearance of Code Nexus components with themes and styling options
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
        <p className="text-gray-300 mb-4">
          All Code Nexus components support theming through the <code className="bg-gray-800 px-1 py-0.5 rounded">theme</code> property. 
          You can choose between light and dark themes, and customize various colors to match your application&apos;s design.
        </p>
        <div className="bg-gray-800 p-4 rounded-lg mb-4">
          <p className="text-gray-300">
            <span className="text-yellow-400 font-semibold">Note:</span> Theme settings are applied consistently across all Code Nexus components,
            including <Link href="/components/nexus-panel" className="text-blue-400 hover:underline">NexusPanel</Link>, <Link href="/components/nexus-snippet" className="text-blue-400 hover:underline">NexusSnippet</Link>, and <Link href="/components/code-nexus" className="text-blue-400 hover:underline">CodeNexus</Link>.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Basic Theme Options</h2>
        <p className="text-gray-300 mb-4">
          By default, all components use the dark theme. You can switch to light theme by setting <code className="bg-gray-800 px-1 py-0.5 rounded">dark: false</code> in the theme property.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Dark Theme (Default)</h3>
            <div className="rounded-lg overflow-hidden border border-gray-700">
              <div className="bg-gray-800 text-white px-4 py-2 text-sm font-medium">
                HTML
              </div>
              <CodeSnippet code={darkThemeExample} language="html" theme="dark" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Light Theme</h3>
            <div className="rounded-lg overflow-hidden border border-gray-700">
              <div className="bg-gray-800 text-white px-4 py-2 text-sm font-medium">
                HTML
              </div>
              <CodeSnippet code={lightThemeExample} language="html" theme="dark" />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Custom Colors</h2>
        <p className="text-gray-300 mb-4">
          You can customize the color palette by providing a <code className="bg-gray-800 px-1 py-0.5 rounded">colors</code> object in the theme property.
          Code Nexus provides a default color set that you can extend or override.
        </p>

        <div className="rounded-lg overflow-hidden border border-gray-700 mb-6">
          <div className="bg-gray-800 text-white px-4 py-2 text-sm font-medium">
            Custom Theme Colors
          </div>
          <CodeSnippet code={customColorsExample} language="js" theme="dark" />
        </div>

        <h3 className="text-xl font-semibold mb-2 text-white">Available Color Properties</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-white mb-2">Background Colors</h4>
            <ul className="text-gray-300 space-y-1">
              <li><code className="text-blue-400">background</code>: Main editor background</li>
              <li><code className="text-blue-400">darkBackground</code>: Panels and gutters</li>
              <li><code className="text-blue-400">highlightBackground</code>: Active line highlight</li>
              <li><code className="text-blue-400">tooltipBackground</code>: Tooltips and popups</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-white mb-2">UI Elements</h4>
            <ul className="text-gray-300 space-y-1">
              <li><code className="text-blue-400">cursor</code>: Editor cursor color</li>
              <li><code className="text-blue-400">selection</code>: Selected text background</li>
              <li><code className="text-blue-400">ivory</code>: Default text color</li>
              <li><code className="text-blue-400">stone</code>: Secondary text (line numbers)</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-white mb-2">Syntax Highlighting</h4>
            <ul className="text-gray-300 space-y-1">
              <li><code className="text-blue-400">violet</code>: Keywords, operators</li>
              <li><code className="text-blue-400">malibu</code>: Functions, methods</li>
              <li><code className="text-blue-400">sage</code>: Strings</li>
              <li><code className="text-blue-400">coral</code>: Variables, properties</li>
              <li><code className="text-blue-400">chalky</code>: Classes, types</li>
              <li><code className="text-blue-400">whiskey</code>: Numbers, constants</li>
              <li><code className="text-blue-400">cyan</code>: Special tokens</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Theme Examples</h2>
        <p className="text-gray-300 mb-4">
          Here are some examples of different themes applied to the same code:
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2 text-white">Midnight Ocean Theme</h3>
          <p className="text-gray-300 mb-4">
            A deep blue and teal theme for night-time coding:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="rounded-lg overflow-hidden border border-gray-700">
                <div className="bg-gray-800 text-white px-4 py-2 text-sm font-medium">
                  Before (Default Theme)
                </div>
                <NexusPanel
                  type="js"
                  content={exampleJsCode}
                  theme={{ colors: color, dark: true }}
                  readonly={true}
                />
              </div>
            </div>
            
            <div>
              <div className="rounded-lg overflow-hidden border border-gray-700">
                <div className="bg-gray-800 text-white px-4 py-2 text-sm font-medium">
                  After (Midnight Ocean Theme)
                </div>
                <NexusPanel
                  type="js"
                  content={exampleJsCode}
                  theme={{ colors: midnightOceanTheme, dark: true }}
                  readonly={true}
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-white mb-2">Code to create this theme:</h4>
            <CodeSnippet code={midnightOceanThemeCode} language="js" theme="dark" />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">React Integration</h2>
        <p className="text-gray-300 mb-4">
          When using the React components, you can pass the theme as an object instead of a JSON string:
        </p>
        <div className="rounded-lg overflow-hidden border border-gray-700">
          <div className="bg-gray-800 text-white px-4 py-2 text-sm font-medium">
            React Component with Custom Theme
          </div>
          <CodeSnippet code={reactThemeExample} language="js" theme="dark" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Best Practices</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Maintain good contrast ratios between background colors and text for readability</li>
          <li>Use complementary colors for syntax highlighting to make different code elements distinct</li>
          <li>Consider creating theme variables to reuse across your application for consistency</li>
          <li>Test your custom themes with different types of code to ensure all elements are visible</li>
        </ul>
        <p className="text-gray-300">
          For more detailed information about using Code Nexus components, see the 
          <Link href="/components" className="text-blue-400 hover:underline ml-1">Components documentation</Link>.
        </p>
      </section>
    </div>
  );
} 