import { readFileSync } from "fs";
import Link from "next/link";

export default function GettingStarted() {
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
            Choose the package that fits your needs:
          </p>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-2 text-gray-200">For vanilla JS projects:</h4>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre><code className="text-gray-300">npm install code-nexus</code></pre>
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-2 text-gray-200">For React projects:</h4>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre><code className="text-gray-300">npm install code-nexus-react</code></pre>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4 text-white">2. Add Font (Recommended)</h3>
          <p className="text-gray-300 mb-4">
            It&apos;s recommended to install the Roboto font for the best experience:
          </p>
          
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-8">
            <pre><code className="text-gray-300">{`<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />`}</code></pre>
          </div>
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
            
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre><code className="text-gray-300">{`import { CodeNexus } from "code-nexus-react";

function App() {
  return (
    <CodeNexus 
      html="<h1>Hello World</h1>"
      css="h1 { color: blue; }"
      javascript="console.log(&apos;Hello from Code Nexus&apos;);"
    />
  );
}`}</code></pre>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">Vanilla JS Integration</h3>
            <p className="text-gray-300 mb-4">
              Use as a web component in any HTML page:
            </p>
            
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre><code className="text-gray-300">{`<script type="module">
  import { defineCustomElements } from &apos;code-nexus/loader&apos;;
  defineCustomElements();
</script>

<code-nexus
  html="<h1>Hello World</h1>"
  css="h1 { color: blue; }"
  javascript="console.log(&apos;Hello from Code Nexus&apos;);"
></code-nexus>`}</code></pre>
            </div>
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
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre><code className="text-gray-300">{`<code-nexus
  enable-templates="true"
  templates={[
    {
      name: "Hello World",
      html: "<h1>Hello</h1>",
      css: "h1 { color: blue }",
      javascript: "console.log(&apos;Hello&apos;);"
    }
  ]}
></code-nexus>`}</code></pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Customization</h3>
              <p className="text-gray-300 mb-4">
                Customize the appearance and behavior:
              </p>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre><code className="text-gray-300">{`<code-nexus
  tabbed="true"
  debounce-time="500"
  theme={{ 
    colors: customColors, 
    dark: false 
  }}
></code-nexus>`}</code></pre>
              </div>
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
