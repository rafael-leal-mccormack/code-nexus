# Code Nexus
![image](https://github.com/rafael-leal-mccormack/code-sandbox/assets/5799157/9e7da93f-a24f-445c-ad1c-7a6cb46f747c)

Code Nexus is a powerful in-page code editor library that provides an interactive coding environment directly within your web applications. Built with a component-based architecture, it offers both a standalone editor and a side panel that can load and display content dynamically.

## Repository Structure

This monorepo contains three main packages:

1. **code-nexus** - The core custom element built with StencilJS
   - Framework-agnostic web component
   - Provides the base code editor functionality
   - Supports HTML, CSS, and JavaScript editing with live preview

2. **code-nexus-react** - React wrapper components
   - React bindings for the core StencilJS components
   - Makes integration with React applications seamless

3. **code-nexus-web** - Documentation website
   - Built with Next.js
   - Showcases component examples and usage
   - Provides comprehensive documentation

## Key Features

- **Live Code Editing**: Edit HTML, CSS, and JavaScript with real-time preview
- **Tabbed or Split View**: Choose between tabbed interface or split-pane view
- **Theme Support**: Customize with light/dark themes
- **Nexus Panel**: Dedicated component for code snippet management
- **Framework Agnostic**: Use as vanilla web components or with React wrappers

## Installation

```bash
npm install code-nexus
# For React applications
npm install code-nexus-react
```

## Basic Usage

### React

```jsx
import { CodeNexus } from "code-nexus-react";

function App() {
  return (
    <CodeNexus 
      html="<h1>Hello World</h1>"
      css="h1 { color: blue; }"
      javascript="console.log('Hello from Code Nexus');"
    />
  );
}
```

### Vanilla JS

```html
<script type="module">
  import { defineCustomElements } from 'code-nexus/loader';
  defineCustomElements();
</script>

<code-nexus
  html="<h1>Hello World</h1>"
  css="h1 { color: blue; }"
  javascript="console.log('Hello from Code Nexus');"
></code-nexus>
```

## Component Properties

### CodeNexus Component

| Property       | Description                                          | Type                    | Default   |
|----------------|------------------------------------------------------|-----------------------------|-----------|
| `html`         | HTML content                                        | `string`                | Empty string |
| `css`          | CSS content                                         | `string`                | Empty string |
| `javascript`   | JavaScript content                                  | `string`                | Empty string |
| `debounceTime` | Time to debounce updates to the preview             | `number`                | 300       |
| `hideEditors`  | Hides the live editor containers                    | `boolean`               | false     |
| `tabbed`       | Switches from split view to a tabbed view           | `boolean`               | false     |
| `theme`        | Theme configuration                                 | `{ colors, dark }`      | Dark theme|

### NexusPanel Component

| Property    | Description                      | Type                    | Default   |
|-------------|----------------------------------|-----------------------------|-----------|
| `content`   | Panel content                    | `string`                | Empty string |
| `panelName` | Name of the panel                | `string`                | undefined|
| `readonly`  | Makes the panel read-only        | `boolean`               | false     |
| `type`      | Content type                     | `"html" \| "css" \| "js"` | 'js'      |
| `theme`     | Theme configuration              | `{ colors, dark }`      | Dark theme|

## Running the Development Environment

### Demo Environment

To run the code nexus demo environment:

```bash
# Install dependencies
npm ci

# Start the Stencil development server
npm run start:nexus
```

### Documentation Website

To run the documentation site:

```bash
# Install dependencies (if not already done)
npm ci

# Start the Next.js development server
npm run start:web
```

## Font Recommendation

It's recommended to use Roboto font with this library for the best experience:

```html
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"/>
```

## License

MIT