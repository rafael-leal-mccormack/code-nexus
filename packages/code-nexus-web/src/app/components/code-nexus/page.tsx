"use client";
import React from 'react';
import Link from 'next/link';
import CodeSnippet from '../../../components/code-snippet';
import PropertyTable from '../../../components/property-table';
import CodeTabs from '../../../components/code-tabs';
import CodeNexusExample from '../../../components/codenexus-example';

export default function CodeNexusComponent() {
  // Define properties for CodeNexus component
  const properties = {
    general: [
      { name: "html", description: "HTML content", type: "string", default: "Empty string" },
      { name: "css", description: "CSS content", type: "string", default: "Empty string" },
      { name: "javascript", description: "JavaScript content", type: "string", default: "Empty string" },
      { name: "debounceTime", description: "Time to debounce updates to the preview", type: "number", default: "300" },
    ],
    appearance: [
      { name: "hideEditors", description: "Hides the live editor containers", type: "boolean", default: "false" },
      { name: "tabbed", description: "Switches from split view to a tabbed view", type: "boolean", default: "false" },
      { name: "theme", description: "Theme configuration", type: "{ colors, dark }", default: "Dark theme" },
    ],
    templates: [
      { name: "enableTemplates", description: "Ability to load example/starter templates", type: "boolean", default: "false" },
      { name: "templates", description: "Custom starter templates for quick loading", type: "{ name, html, css, javascript }[]", default: "[]" },
    ],
    formatting: [
      { name: "enableFormatting", description: "Enables code formatting functionality", type: "boolean", default: "false" },
      { name: "formattingOptions", description: "Options for code formatting", type: "FormattingOptions", default: "{}" },
      { name: "showFormattingButtons", description: "Show formatting buttons in the UI", type: "boolean", default: "true" },
    ],
  };

  // Basic usage example - React version
  const basicUsageReact = `
<CodeNexus
  html="<h1>Hello World</h1>"
  css="h1 { color: blue; }"
  javascript="console.log('Hello from Code Nexus');"
/>`;

  // Basic usage example - HTML version
  const basicUsageHtml = `
<code-nexus
  html="<h1>Hello World</h1>"
  css="h1 { color: blue; }"
  javascript="console.log('Hello from Code Nexus');"
></code-nexus>`;

  // Template example - React version
  const templateExampleReact = `
<CodeNexus
  enableTemplates={true}
  templates={[
    {
      name: "Hello World",
      html: "<h1>Hello</h1>",
      css: "h1 { color: blue }",
      javascript: "console.log('Hello');"
    },
    {
      name: "Counter",
      html: "<button id='counter'>Count: 0</button>",
      css: "button { padding: 10px; }",
      javascript: "let count = 0; document.getElementById('counter').addEventListener('click', () => { count++; document.getElementById('counter').textContent = 'Count: ' + count; });"
    }
  ]}
/>`;

  // Template example - HTML version
  const templateExampleHtml = `
<code-nexus
  enable-templates="true"
  templates='[
    {
      "name": "Hello World",
      "html": "<h1>Hello</h1>",
      "css": "h1 { color: blue }",
      "javascript": "console.log(\"Hello\");"
    },
    {
      "name": "Counter",
      "html": "<button id=\"counter\">Count: 0</button>",
      "css": "button { padding: 10px; }",
      "javascript": "let count = 0; document.getElementById(\"counter\").addEventListener(\"click\", () => { count++; document.getElementById(\"counter\").textContent = \"Count: \" + count; });"
    }
  ]'
></code-nexus>`;

  // Formatting example - React version
  const formattingExampleReact = `
<CodeNexus 
  enableFormatting={true}
  formattingOptions={{ printWidth: 100, tabWidth: 2, singleQuote: true }}
/>`;

  // Formatting example - HTML version
  const formattingExampleHtml = `
<code-nexus 
  enable-formatting="true"
  formatting-options='{ "printWidth": 100, "tabWidth": 2, "singleQuote": true }'
></code-nexus>`;

  // React integration example
  const reactExample = `
import { CodeNexus } from "code-nexus-react";

function App() {
  const [html, setHtml] = useState("<h1>Hello World</h1>");
  const [css, setCss] = useState("h1 { color: blue; }");
  const [js, setJs] = useState("console.log('Hello');");

  const handleContentChange = (event) => {
    const { html, css, javascript } = event.detail;
    setHtml(html);
    setCss(css);
    setJs(javascript);
  };

  return (
    <CodeNexus
      html={html}
      css={css}
      javascript={js}
      onContentChange={handleContentChange}
    />
  );
}`;

  // Event handler example - React version
  const eventHandlerExampleReact = `
<CodeNexus
  onContentChange={(event) => {
    const { html, css, javascript } = event.detail;
    console.log('Content changed:', { html, css, javascript });
  }}
/>`;

  // Event handler example - HTML version
  const eventHandlerExampleHtml = `
<code-nexus
  oncontentchange="handleContentChange(event)"
></code-nexus>

<script>
function handleContentChange(event) {
  const { html, css, javascript } = event.detail;
  console.log('Content changed:', { html, css, javascript });
}
</script>`;

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
          CodeNexus
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl">
          The main component that provides a full-featured code editor with live preview. It supports HTML, CSS, and JavaScript editing with real-time preview and many advanced features.
        </p>
      </div>
      
      {/* Basic Usage */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Basic Usage</h2>
        <CodeTabs 
          reactCode={basicUsageReact} 
          htmlCode={basicUsageHtml}
          language="html"
        />
      </section>

      {/* Properties */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Properties</h2>
        <PropertyTable title="General" properties={properties.general} />
        <PropertyTable title="Appearance" properties={properties.appearance} />
        <PropertyTable title="Templates" properties={properties.templates} />
        <PropertyTable title="Formatting" properties={properties.formatting} />
      </section>

      {/* Events */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Events</h2>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-2 text-white">contentChange</h3>
          <p className="text-gray-300 mb-3">Event emitted when any editor content changes</p>
          <CodeSnippet 
            code="{ html: string; css: string; javascript: string }" 
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
          <h3 className="text-lg font-semibold mb-2 text-white">loadTemplate(template)</h3>
          <p className="text-gray-300 mb-3">Loads a template into the editor</p>
          
          <h4 className="text-md font-semibold mt-4 mb-2 text-gray-200">Parameters:</h4>
          <CodeSnippet 
            code="template: { html: string; css: string; javascript: string }" 
            language="js"
          />
          
          <h4 className="text-md font-semibold mt-4 mb-2 text-gray-200">Returns:</h4>
          <CodeSnippet 
            code="Promise<void>" 
            language="js"
          />
          
          <h4 className="text-md font-semibold mt-4 mb-2 text-gray-200">Example:</h4>
          <CodeSnippet 
            code={`// Get a reference to the component
const codeNexus = document.querySelector('code-nexus');

// Load a template
codeNexus.loadTemplate({
  html: '<h1>Hello World</h1>',
  css: 'h1 { color: blue; }',
  javascript: 'console.log("Hello");'
}).then(() => {
  console.log('Template loaded successfully');
});`} 
            language="js"
          />
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-2 text-white">formatAll()</h3>
          <p className="text-gray-300 mb-3">Format all code sections</p>
          
          <h4 className="text-md font-semibold mt-4 mb-2 text-gray-200">Returns:</h4>
          <CodeSnippet 
            code="Promise<void>" 
            language="js"
          />
          
          <h4 className="text-md font-semibold mt-4 mb-2 text-gray-200">Example:</h4>
          <CodeSnippet 
            code={`// Get a reference to the component
const codeNexus = document.querySelector('code-nexus');

// Format all code
codeNexus.formatAll().then(() => {
  console.log('Code formatted successfully');
});`} 
            language="js"
          />
        </div>
      </section>

      {/* Advanced Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Advanced Examples</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Templates</h3>
          <p className="text-gray-300 mb-4">
            You can provide templates for users to quickly load and experiment with different code examples:
          </p>
          <CodeTabs 
            reactCode={templateExampleReact} 
            htmlCode={templateExampleHtml}
            language="html"
          />
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Code Formatting</h3>
          <p className="text-gray-300 mb-4">
            Enable code formatting to allow users to format their code with a single click:
          </p>
          <CodeTabs 
            reactCode={formattingExampleReact} 
            htmlCode={formattingExampleHtml}
            language="html"
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
      
      {/* Live Interactive Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Editable Interactive Example</h2>
        <p className="text-gray-300 mb-6">
          This example is fully editable. You can modify the HTML, CSS, and JavaScript to see your changes in real-time. The editor supports syntax highlighting, code formatting, and provides an instant preview of your code.
        </p>
        
        <div className="rounded-lg overflow-hidden border border-gray-700">
          <CodeNexusExample />
        </div>
      </section>
    </div>
  );
} 