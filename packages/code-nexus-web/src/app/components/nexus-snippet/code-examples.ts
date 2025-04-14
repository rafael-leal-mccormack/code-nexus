// Code examples for nexus-snippet component

// CSS examples as strings
export const containerCss = `.container {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
}`;

export const flexCss = `.container { display: flex; }`;

export const colorCss = `.element { color: blue; }`;

// JavaScript examples
export const arrayMapJs = `const array = [1, 2, 3, 4, 5];
const doubled = array.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]`;

export const inlineArrayJs = `const array = [1, 2, 3].map(n => n * 2);`;

export const querySelectorJs = `document.querySelector('.element')`;

// HTML examples
export const containerHtml = `<div className="container">
  <h1 className="title">Hello World</h1>
  <p>This is an example</p>
</div>`;

export const wrapperHtml = `<div className='wrapper'><h1>Title</h1></div>`;

// Basic usage examples
export const basicUsageReact = `
<NexusSnippet>const message = 'Hello world';</NexusSnippet>`;

export const basicUsageHtml = `
<nexus-snippet>const message = 'Hello world';</nexus-snippet>`;

// Documentation examples
export const documentationExampleReact = `
<p>To fetch data from an API, use <NexusSnippet>fetch('https://api.example.com/data')</NexusSnippet> 
and handle the response with <NexusSnippet>response.json()</NexusSnippet>.</p>
<p>Don't forget to catch errors: <NexusSnippet>.catch(error => console.error(error))</NexusSnippet></p>`;

export const documentationExampleHtml = `
<p>To fetch data from an API, use <nexus-snippet>fetch('https://api.example.com/data')</nexus-snippet> 
and handle the response with <nexus-snippet>response.json()</nexus-snippet>.</p>
<p>Don't forget to catch errors: <nexus-snippet>.catch(error => console.error(error))</nexus-snippet></p>`;

// Languages examples
export const languagesExampleReact = `
{/* JavaScript Example */}
<NexusSnippet>
const array = [1, 2, 3, 4, 5];
const doubled = array.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
</NexusSnippet>

{/* HTML Example */}
<NexusSnippet type="html">
<div class="container">
  <h1 class="title">Hello World</h1>
  <p>This is an example</p>
</div>
</NexusSnippet>

{/* CSS Example */}
<NexusSnippet type="css">
.container {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
}
</NexusSnippet>`;

export const languagesExampleHtml = `
<!-- JavaScript Example -->
<nexus-snippet>
const array = [1, 2, 3, 4, 5];
const doubled = array.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
</nexus-snippet>

<!-- HTML Example -->
<nexus-snippet type="html">
<div class="container">
  <h1 class="title">Hello World</h1>
  <p>This is an example</p>
</div>
</nexus-snippet>

<!-- CSS Example -->
<nexus-snippet type="css">
.container {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
}
</nexus-snippet>`;

// Inline examples
export const inlineExamplesReact = `
<ul style="line-height: 2">
  <li>JavaScript: <NexusSnippet>const array = [1, 2, 3].map(n => n * 2);</NexusSnippet></li>
  <li>HTML with slot: <NexusSnippet type="html" content="<div class='container'></div>"></NexusSnippet></li> 
  <li>HTML with content prop: <NexusSnippet type="html" content="<div class='wrapper'><h1>Title</h1></div>"></NexusSnippet></li>
  <li>CSS: <NexusSnippet type="css">.container { display: flex; }</NexusSnippet></li>
</ul>`;

export const inlineExamplesHtml = `
<ul style="line-height: 2">
  <li>JavaScript: <nexus-snippet>const array = [1, 2, 3].map(n => n * 2);</nexus-snippet></li>
  <li>HTML with slot: <nexus-snippet type="html" content="<div class='container'></div>"></nexus-snippet></li> 
  <li>HTML with content prop: <nexus-snippet type="html" content="<div class='wrapper'><h1>Title</h1></div>"></nexus-snippet></li>
  <li>CSS: <nexus-snippet type="css">.container { display: flex; }</nexus-snippet></li>
</ul>`;

// Theming examples
export const themingExampleReact = `
<div style="padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
  <p>
    Use <NexusSnippet theme={{ dark: false }}>document.querySelector('.element')</NexusSnippet> to select DOM elements.
  </p>
  <p>
    Style your elements with <NexusSnippet type="css" theme={{ dark: false }}>.element { color: blue; }</NexusSnippet> to make them stand out.
  </p>
</div>`;

export const themingExampleHtml = `
<div style="padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
  <p>
    Use <nexus-snippet theme='{ "dark": false }'>document.querySelector('.element')</nexus-snippet> to select DOM elements.
  </p>
  <p>
    Style your elements with <nexus-snippet type="css" theme='{ "dark": false }'>.element { color: blue; }</nexus-snippet> to make them stand out.
  </p>
</div>`;

// React integration example
export const reactExample = `// Import the React wrapper component
import { NexusSnippet } from "code-nexus-react";

// Use the component in your React application
function Documentation() {
  // This component will render code snippets
  return (
    <div>
      <h2>Code Examples</h2>
      
      <p>
        JavaScript Example:
        <NexusSnippet>
          fetch('/api/data')
        </NexusSnippet>
      </p>
      
      <p>
        CSS Example:
        <NexusSnippet type="css">
          .container { display: flex; }
        </NexusSnippet>
      </p>
    </div>
  );
}`; 