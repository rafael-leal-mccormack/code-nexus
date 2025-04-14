# Code Nexus

Code Nexus is a powerful web component library for interactive code editing, formatting, and display. Built with Stencil, it provides highly configurable components for creating code editing experiences in your web applications.

[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

## Components

Code Nexus includes the following components:

### 1. `<code-nexus>`

The main component that provides a full-featured code editor with live preview. It supports HTML, CSS, and JavaScript editing in a single component.

Key features:
- Live preview of code changes
- Split or tabbed views
- Light and dark themes
- Template support
- Code formatting with Prettier

### 2. `<nexus-panel>`

A lightweight code editor panel for when you need to display or edit a single type of code (HTML, CSS, or JavaScript).

Key features:
- Syntax highlighting
- Line numbers
- Copy functionality
- Read-only mode option

### 3. `<nexus-snippet>`

A compact component for displaying inline code snippets with syntax highlighting.

Key features:
- Language-specific syntax highlighting
- Dark and light themes
- Inline or multiline code display

### 4. `<nexus-tab>`

A utility component used for creating tabs in the tabbed view.

## Features

### Code Editing

All editing components use CodeMirror underneath, providing:
- Syntax highlighting
- Auto-indentation
- Line numbers
- And more...

### Code Formatting

Code Nexus includes built-in code formatting capabilities powered by Prettier:

- Format HTML, CSS, and JavaScript code
- Configurable formatting options
- Keyboard shortcuts (Ctrl+Shift+F / Cmd+Shift+F)
- Format button in the UI

### Templating

The Code Nexus component supports loading code templates:

- Built-in template support via component properties
- Programmatic template loading via methods
- Template previews

### Themes

All components support both light and dark themes with customizable colors.

## Getting Started

### Installation

```bash
npm install code-nexus --save
```

### Usage

```html
<!-- Import the component -->
<script type="module" src="node_modules/code-nexus/dist/code-nexus/code-nexus.esm.js"></script>

<!-- Use the component -->
<code-nexus></code-nexus>
```

Or with specific initial code:

```html
<code-nexus
  html="<h1>Hello World</h1>"
  css="h1 { color: blue; }"
  javascript="console.log('Hello from Code Nexus');"
></code-nexus>
```

### Using the Panel Component

```html
<nexus-panel
  panel-name="JavaScript Example"
  type="js"
  content="const greeting = 'Hello, world!';\nconsole.log(greeting);"
></nexus-panel>
```

### Using the Snippet Component

```html
<nexus-snippet>const array = [1, 2, 3].map(n => n * 2);</nexus-snippet>
```

Or with HTML content:

```html
<nexus-snippet type="html" content="<div class='container'></div>"></nexus-snippet>
```

## Enabling Code Formatting

To enable code formatting in the Code Nexus component:

```html
<code-nexus 
  enable-formatting="true"
  formatting-options='{ "printWidth": 100, "tabWidth": 2, "singleQuote": true }'
></code-nexus>
```

## Browser Support

Code Nexus works in all modern browsers that support Custom Elements v1:
- Chrome
- Firefox
- Safari
- Edge (Chromium-based)

## License

MIT
