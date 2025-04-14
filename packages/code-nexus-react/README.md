# Code Nexus React

[![NPM Version](https://img.shields.io/npm/v/code-nexus-react.svg?style=flat-square)](https://www.npmjs.com/package/code-nexus-react)
[![Docs Site](https://img.shields.io/badge/Docs-codenexus.us-blue?style=flat-square)](https://codenexus.us)

This package provides React wrapper components for the core [Code Nexus](https://github.com/rafael-leal-mccormack/code-nexus/tree/main/packages/code-nexus) web components.

It makes integrating the Code Nexus editor and panels into React applications seamless.

**[View the Full Documentation & Examples](https://codenexus.us)**

## Installation

```bash
npm install code-nexus-react code-nexus
# or
yarn add code-nexus-react code-nexus
```

Note: You need to install the core `code-nexus` package as well, as this package depends on it.

## Usage

Import the components and use them like standard React components:

```jsx
import React from 'react';
import { CodeNexus, NexusPanel, NexusSnippet } from 'code-nexus-react';

function MyEditorComponent() {
  const themeOptions = { dark: true }; // Example theme

  return (
    <div>
      <h2>Full Editor Example</h2>
      <CodeNexus 
        html="<h1>Hello World</h1>"
        css="h1 { color: #60a5fa; }"
        javascript="console.log('React integration!');"
        theme={themeOptions}
      />

      <h2>Panel Example</h2>
      <NexusPanel
        type="js"
        panelName="My JS Panel"
        content="const value = 123;"
        theme={themeOptions}
      />

      <h2>Snippet Example</h2>
      <NexusSnippet type="css" theme={themeOptions}>
        {`.my-class { display: block; }`}
      </NexusSnippet>
    </div>
  );
}

export default MyEditorComponent;
```

For detailed component props and usage, please refer to the main [Code Nexus documentation](https://github.com/rafael-leal-mccormack/code-nexus/blob/main/readme.md).

## License

ISC (as per package.json - consider changing to MIT to match the core package) 