import { readFileSync } from "fs";
import Link from "next/link";
import CodeSnippet from "@/components/code-snippet";

export default function GettingStarted() {
  // Define code examples as constants
  const installNexus = `npm install code-nexus`;
  const installNexusReact = `npm install code-nexus-react code-nexus`; // Also need core package
  const fontLink = `<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />`;
  const reactUsage = `import { CodeNexus } from "code-nexus-react";

function App() {
  return (
    <CodeNexus 
      html="<h1>Hello World</h1>"
      css="h1 { color: blue; }"
      javascript="console.log('Hello from Code Nexus');"
    />
  );
}`;
  const vanillaUsage = `<script type="module">
  import { defineCustomElements } from 'code-nexus/loader';
  defineCustomElements();
</script>

<code-nexus
  html="<h1>Hello World</h1>"
  css="h1 { color: blue; }"
  javascript="console.log('Hello from Code Nexus');"
></code-nexus>`;
  const templatesUsage = `<code-nexus
  enable-templates="true"
  templates={[
    {
      name: "Hello World",
      html: "<h1>Hello</h1>",
      css: "h1 { color: blue }",
      javascript: "console.log('Hello');"
    }
  ]}
></code-nexus>`;
  const customizationUsage = `<code-nexus
  tabbed="true"
  debounce-time="500"
  theme={{
    // Assuming customColors is defined elsewhere
    colors: customColors, 
    dark: false 
  }}
></code-nexus>`;

  return (
    <div className="w-full max-w-6xl mx-auto pb-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Getting Started with Code Nexus
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Follow these simple steps to install and start using Code Nexus in your projects.
        </p>
      </div>

      {/* Installation Section */}
      <section className="mb-16">
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-3">Installation</h2>
          
          <h3 className="text-xl font-bold mb-4 text-white">1. Install the packages</h3>
          <p className="text-gray-300 mb-4">
            Choose the package that fits your needs (Core `code-nexus` is required for React wrapper):
          </p>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-2 text-gray-200">Vanilla JS / Core:</h4>
            <CodeSnippet code={installNexus} theme="dark" />
          </div>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-2 text-gray-200">React:</h4>
            <CodeSnippet code={installNexusReact} theme="dark" />
          </div>

          <h3 className="text-xl font-bold mb-4 text-white">2. Add Font (Recommended)</h3>
          <p className="text-gray-300 mb-4">
            Include the Roboto font in your HTML head for the best experience:
          </p>
          
          <CodeSnippet code={fontLink} language="html" theme="dark" />
        </div>
      </section>

      {/* Usage Section */}
      <section className="mb-16">
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-3">Basic Usage</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">React Integration</h3>
            <p className="text-gray-300 mb-4">
              Import and use the CodeNexus component in your React application:
            </p>
            
            <CodeSnippet code={reactUsage} language="js" theme="dark" />
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">Vanilla JS Integration</h3>
            <p className="text-gray-300 mb-4">
              Use as a web component in any HTML page:
            </p>
            
            <CodeSnippet code={vanillaUsage} language="html" theme="dark" />
          </div>
        </div>
      </section>
      
      {/* Advanced Features */}
      <section className="mb-16">
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-3">Advanced Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Templates</h3>
              <p className="text-gray-300 mb-4">
                Create and use custom templates for quick code snippets:
              </p>
              <CodeSnippet code={templatesUsage} language="html" theme="dark" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Customization</h3>
              <p className="text-gray-300 mb-4">
                Customize the appearance and behavior (theme, layout, etc.):
              </p>
              <CodeSnippet code={customizationUsage} language="html" theme="dark" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Next Steps */}
      <section>
        <div className="bg-gradient-to-r from-blue-800 to-purple-800 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to dive deeper?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Check out the components documentation for more detailed information on all available options and features.
          </p>
          <Link href="/components" className="px-8 py-3 bg-white text-blue-800 font-medium rounded-md hover:bg-gray-100 transition">
            View Components
          </Link>
        </div>
      </section>
    </div>
  );
}
