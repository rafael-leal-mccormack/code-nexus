"use client"
import React from 'react';
import Link from 'next/link';
import CodeSnippet from '../../../components/code-snippet';
import CodeTabs from '../../../components/code-tabs';
import PropertyTable from '../../../components/property-table';
import { NexusPanel } from 'code-nexus-react';
import {
  basicUsageReact,
  basicUsageHtml,
  languagesExampleReact,
  languagesExampleHtml,
  slotExampleReact,
  slotExampleHtml,
  formattingExampleReact,
  formattingExampleHtml,
  reactExample,
  eventHandlerExampleReact,
  eventHandlerExampleHtml,
  formatCodeExample,
  getContentExample
} from './code-examples';

export default function NexusPanelComponent() {
  // Define properties for NexusPanel component
  const properties = {
    general: [
      { name: "content", description: "Code content to display", type: "string", default: "Empty string" },
      { name: "type", description: "Language for syntax highlighting", type: "'html' | 'css' | 'js'", default: "js" },
      { name: "readonly", description: "Set editor to read-only mode", type: "boolean", default: "false" },
    ],
    appearance: [
      { name: "theme", description: "Editor theme configuration", type: "{ dark: boolean }", default: "Dark theme" },
      { name: "lineNumbers", description: "Show line numbers", type: "boolean", default: "true" },
      { name: "showHeader", description: "Show the panel header", type: "boolean", default: "true" },
      { name: "panelName", description: "Custom label for the panel header", type: "string", default: "Based on language" },
    ],
    formatting: [
      { name: "enableFormatting", description: "Enables code formatting functionality", type: "boolean", default: "false" },
      { name: "formattingOptions", description: "Options for code formatting", type: "object", default: "{}" },
      { name: "showFormattingButton", description: "Show formatting button in the UI", type: "boolean", default: "true" },
    ],
  };

  return (
    <div className="w-full max-w-6xl mx-auto pb-16">
      {/* Back link */}
      <div className="mb-8">
        <Link href="/components" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to Components
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">
          NexusPanel
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl">
          A versatile code editor panel that provides syntax highlighting, formatting, and editing capabilities for various programming languages.
        </p>
      </div>
      
      {/* Basic Usage */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Basic Usage</h2>
        <CodeTabs 
          reactCode={basicUsageReact} 
          htmlCode={basicUsageHtml}
          language="js"
        />
      </section>

      {/* Properties */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Properties</h2>
        <PropertyTable title="General" properties={properties.general} />
        <PropertyTable title="Appearance" properties={properties.appearance} />
        <PropertyTable title="Formatting" properties={properties.formatting} />
      </section>

      {/* Events */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Events</h2>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-2 text-white">contentChange</h3>
          <p className="text-gray-300 mb-3">Event emitted when the editor content changes</p>
          <CodeSnippet 
            code="{ content: string }" 
            language="js"
          />
          
          <h4 className="text-md font-semibold mt-4 mb-2 text-gray-200">Example:</h4>
          <CodeTabs 
            reactCode={eventHandlerExampleReact} 
            htmlCode={eventHandlerExampleHtml}
            language="js"
          />
        </div>
      </section>

      {/* Methods */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Methods</h2>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-2 text-white">formatCode()</h3>
          <p className="text-gray-300 mb-3">Format the code in the panel</p>
          
          <h4 className="text-md font-semibold mt-4 mb-2 text-gray-200">Returns:</h4>
          <CodeSnippet 
            code="Promise<void>" 
            language="js"
          />
          
          <h4 className="text-md font-semibold mt-4 mb-2 text-gray-200">Example:</h4>
          <CodeSnippet 
            code={formatCodeExample.trim()}
            language="js"
          />
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-2 text-white">getContent()</h3>
          <p className="text-gray-300 mb-3">Get the current content from the editor</p>
          
          <h4 className="text-md font-semibold mt-4 mb-2 text-gray-200">Returns:</h4>
          <CodeSnippet 
            code="string" 
            language="js"
          />
          
          <h4 className="text-md font-semibold mt-4 mb-2 text-gray-200">Example:</h4>
          <CodeSnippet 
            code={getContentExample.trim()}
            language="js"
          />
        </div>
      </section>

      {/* Advanced Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Advanced Examples</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Multiple Languages</h3>
          <p className="text-gray-300 mb-4">
            Use NexusPanel with different language settings:
          </p>
          <CodeTabs 
            reactCode={languagesExampleReact} 
            htmlCode={languagesExampleHtml}
            language="js"
          />
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Using Slots</h3>
          <p className="text-gray-300 mb-4">
            You can provide code content using slots instead of the content property:
          </p>
          <CodeTabs 
            reactCode={slotExampleReact} 
            htmlCode={slotExampleHtml}
            language="js"
          />
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Code Formatting</h3>
          <p className="text-gray-300 mb-4">
            Enable code formatting with custom options:
          </p>
          <CodeTabs 
            reactCode={formattingExampleReact} 
            htmlCode={formattingExampleHtml}
            language="js"
          />
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">React Integration</h3>
          <p className="text-gray-300 mb-4">
            Use the React wrapper for easier integration in React applications:
          </p>
          <CodeSnippet 
            code={reactExample.trim()} 
            language="js"
          />
        </div>
      </section>

      {/* Live Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Live Examples</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Basic Panel (Read-only)</h3>
          <p className="text-gray-300 mb-4">
            A simple HTML code panel:
          </p>
          <NexusPanel
            key="panel-html-example"
            type="html"
            panelName="HTML Example"
            content="<h1>Hello World</h1><p>This is a code panel</p>"
            readonly={true}
          />
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">JavaScript Example (Read-only)</h3>
          <p className="text-gray-300 mb-4">
            JavaScript panel with syntax highlighting:
          </p>
          <NexusPanel
            key="panel-js-example"
            type="js"
            panelName="JavaScript Example"
            content="function calculateSum(a, b) {
  return a + b;
}

// Call the function
const result = calculateSum(5, 10);
console.log(`The sum is: ${result}`);"
            readonly={true}
          />
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">CSS Styling (Read-only)</h3>
          <p className="text-gray-300 mb-4">
            CSS code with formatting:
          </p>
          <NexusPanel
            key="panel-css-example"
            type="css"
            panelName="CSS Example"
            content=".container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.btn-primary {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}"
            readonly={true}
          />
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Editable Panel <span className="text-blue-400 text-sm font-normal">(Try editing the code!)</span></h3>
          <p className="text-gray-300 mb-4">
            This panel is editable - try modifying the code below:
          </p>
          <div className="rounded-lg overflow-hidden border border-gray-700">
            <div className="bg-blue-900 text-white px-4 py-2 text-sm font-medium">
              Editable Example
            </div>
            <NexusPanel
              key="panel-editable-example"
              type="js"
              panelName="Editable Example"
              content="// Try editing this code!
const greeting = 'Hello';
const name = 'Developer';

function sayHello(greeting, name) {
  return `${greeting}, ${name}!`;
}

console.log(sayHello(greeting, name));"
              readonly={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
} 