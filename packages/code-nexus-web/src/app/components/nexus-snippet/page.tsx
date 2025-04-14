"use client";
import React from 'react';
import Link from 'next/link';
import CodeSnippet from '../../../components/code-snippet';
import CodeTabs from '../../../components/code-tabs';
import PropertyTable from '../../../components/property-table';
import { NexusSnippet } from 'code-nexus-react';
import { 
  containerCss, 
  flexCss, 
  colorCss, 
  arrayMapJs, 
  inlineArrayJs, 
  querySelectorJs, 
  containerHtml, 
  wrapperHtml,
  basicUsageReact,
  basicUsageHtml,
  documentationExampleReact,
  documentationExampleHtml,
  languagesExampleReact,
  languagesExampleHtml,
  inlineExamplesReact,
  inlineExamplesHtml,
  themingExampleReact,
  themingExampleHtml,
  reactExample
} from './code-examples';

export default function NexusSnippetComponent() {
  // Define properties for NexusSnippet component
  const properties = {
    general: [
      { name: "content", description: "The content inside the snippet (inline code)", type: "string", default: "undefined" },
      { name: "type", description: "The type of code (for syntax highlighting)", type: "'js' | 'html' | 'css'", default: "'js'" },
    ],
    appearance: [
      { name: "theme", description: "Theme configuration", type: "{ dark: boolean, colors: {...} }", default: "{ colors: color, dark: true }" },
    ]
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
          NexusSnippet
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl">
          A compact component for displaying inline code snippets with syntax highlighting, perfect for documentation and tutorials.
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
      </section>

      {/* Use Cases */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Use Cases</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Documentation</h3>
          <p className="text-gray-300 mb-4">
            Enhance documentation with inline code references:
          </p>
          <CodeTabs 
            reactCode={documentationExampleReact} 
            htmlCode={documentationExampleHtml}
            language="html"
          />
          <div className="mt-4 bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-300">
              To fetch data from an API, use <code className="bg-gray-700 px-2 py-1 rounded text-blue-300">fetch(&apos;https://api.example.com/data&apos;)</code> 
              and handle the response with <code className="bg-gray-700 px-2 py-1 rounded text-blue-300">response.json()</code>.
            </p>
            <p className="text-gray-300 mt-2">
              Don&apos;t forget to catch errors: <code className="bg-gray-700 px-2 py-1 rounded text-blue-300">.catch(error =&gt; console.error(error))</code>
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Advanced Examples</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Multiple Languages</h3>
          <p className="text-gray-300 mb-4">
            Use the <code>type</code> attribute to specify the language for syntax highlighting:
          </p>
          <CodeTabs 
            reactCode={languagesExampleReact} 
            htmlCode={languagesExampleHtml}
            language="html"
          />
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Inline Usage</h3>
          <p className="text-gray-300 mb-4">
            Mix different types of snippets within text for documentation:
          </p>
          <CodeTabs 
            reactCode={inlineExamplesReact} 
            htmlCode={inlineExamplesHtml}
            language="html"
          />
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Custom Theming</h3>
          <p className="text-gray-300 mb-4">
            Customize the appearance with the theme property:
          </p>
          <CodeTabs 
            reactCode={themingExampleReact} 
            htmlCode={themingExampleHtml}
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

      {/* Live Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Live Examples</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Basic Inline JavaScript</h3>
          <p className="text-gray-300 mb-4">
            Use the nexus-snippet component to display code inline with proper syntax highlighting:
          </p>
          <div className="mt-4 bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-300">
              Here&apos;s how to create a variable in JavaScript: <NexusSnippet>const message = &apos;Hello world&apos;;</NexusSnippet>
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Documentation Style</h3>
          <p className="text-gray-300 mb-4">
            Perfect for tutorial-style content with inline code references:
          </p>
          <div className="mt-4 bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-300">
              To fetch data from an API, use <NexusSnippet>fetch(&apos;https://api.example.com/data&apos;)</NexusSnippet> and 
              handle the response with <NexusSnippet>response.json()</NexusSnippet>.
            </p>
            <p className="text-gray-300 mt-2">
              Don&apos;t forget to catch errors: <NexusSnippet>.catch(error ={'>'} console.error(error))</NexusSnippet>
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Multiple Languages</h3>
          <p className="text-gray-300 mb-4">
            Examples in different languages with type attribute:
          </p>
          <div className="mt-4 bg-gray-800 p-6 rounded-lg space-y-6">
            <div>
              <h4 className="text-md font-semibold mb-2 text-gray-200">JavaScript:</h4>
              <NexusSnippet key="snippet-js">
                {arrayMapJs}
              </NexusSnippet>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-2 text-gray-200">HTML:</h4>
              <NexusSnippet type="html" key="snippet-html">
                {containerHtml}
              </NexusSnippet>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-2 text-gray-200">CSS:</h4>
              <NexusSnippet type="css" key="snippet-css">
                {containerCss}
              </NexusSnippet>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Inline Type Examples</h3>
          <p className="text-gray-300 mb-4">
            Various ways to use the component inline with different types:
          </p>
          <div className="mt-4 bg-gray-800 p-6 rounded-lg">
            <ul className="text-gray-300 space-y-3">
              <li>JavaScript: <NexusSnippet key="inline-js">{inlineArrayJs}</NexusSnippet></li>
              <li>HTML with content prop: <NexusSnippet type="html" content={wrapperHtml} key="inline-html"></NexusSnippet></li>
              <li>CSS: <NexusSnippet type="css" key="inline-css">{flexCss}</NexusSnippet></li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Light Theme</h3>
          <p className="text-gray-300 mb-4">
            For light-themed interfaces, you can set the theme property:
          </p>
          <div className="mt-4 bg-white dark:bg-white p-6 rounded-lg">
            <p className="text-gray-800">
              Use <NexusSnippet key="theme-js">{querySelectorJs}</NexusSnippet> to select DOM elements.
            </p>
            <p className="text-gray-800 mt-2">
              Style your elements with <NexusSnippet type="css" key="theme-css">{colorCss}</NexusSnippet> to make them stand out.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 