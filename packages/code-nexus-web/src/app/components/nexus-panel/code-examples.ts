// Code examples for nexus-panel component

// Basic usage examples
export const basicUsageReact = `
<NexusPanel
  type="html"
  content="<h1>Hello World</h1><p>This is a code panel</p>"
/>`;

export const basicUsageHtml = `
<nexus-panel
  language="html"
  content="<h1>Hello World</h1><p>This is a code panel</p>"
></nexus-panel>`;

// Languages examples
export const languagesExampleReact = `
// HTML Panel
<NexusPanel
  type="html"
  content="<h1>Hello World</h1>"
/>

// CSS Panel
<NexusPanel
  type="css"
  content="h1 { color: blue; font-size: 2em; }"
/>

// JavaScript Panel
<NexusPanel
  type="js"
  content="console.log('Hello from Nexus Panel');"
/>`;

export const languagesExampleHtml = `
<!-- HTML Panel -->
<nexus-panel
  language="html"
  content="<h1>Hello World</h1>"
></nexus-panel>

<!-- CSS Panel -->
<nexus-panel
  language="css"
  content="h1 { color: blue; font-size: 2em; }"
></nexus-panel>

<!-- JavaScript Panel -->
<nexus-panel
  language="javascript"
  content="console.log('Hello from Nexus Panel');"
></nexus-panel>`;

// Slot content examples
export const slotExampleReact = `
<NexusPanel type="css">
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  
  h1 {
    color: blue;
  }
</NexusPanel>`;

export const slotExampleHtml = `
<nexus-panel language="css">
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  
  h1 {
    color: blue;
  }
</nexus-panel>`;

// Formatting examples
export const formattingExampleReact = `
<NexusPanel 
  type="js"
  content="function example() { const x = 1; const y = 2; return x + y; }"
  enableFormatting={true}
  formattingOptions={{ printWidth: 80, tabWidth: 2, singleQuote: true }}
/>`;

export const formattingExampleHtml = `
<nexus-panel 
  language="javascript"
  content="function example() { const x = 1; const y = 2; return x + y; }"
  enable-formatting="true"
  formatting-options='{ "printWidth": 80, "tabWidth": 2, "singleQuote": true }'
></nexus-panel>`;

// React integration example
export const reactExample = `
import { NexusPanel } from "code-nexus-react";

function CodeEditor() {
  const [code, setCode] = useState("<h1>Hello World</h1>");

  const handleContentChange = (event) => {
    setCode(event.detail.content);
  };

  return (
    <NexusPanel
      type="html"
      content={code}
      onContentChange={handleContentChange}
    />
  );
}`;

// Event handler examples
export const eventHandlerExampleReact = `
<NexusPanel
  type="js"
  content="console.log('Hello');"
  onContentChange={(event) => {
    console.log('Content changed:', event.detail.content);
  }}
/>`;

export const eventHandlerExampleHtml = `
<nexus-panel
  language="javascript"
  content="console.log('Hello');"
  oncontentchange="handleContentChange(event)"
></nexus-panel>

<script>
function handleContentChange(event) {
  console.log('Content changed:', event.detail.content);
}
</script>`;

// Methods examples
export const formatCodeExample = `
// Get a reference to the component
const panel = document.querySelector('nexus-panel');

// Format the code
panel.formatCode().then(() => {
  console.log('Code formatted successfully');
});`;

export const getContentExample = `
// Get a reference to the component
const panel = document.querySelector('nexus-panel');

// Get the content
const content = panel.getContent();
console.log('Current content:', content);`; 