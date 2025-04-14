# code-nexus



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                 | Description                                          | Type                                                                 | Default                         |
| ----------------------- | ------------------------- | ---------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------- |
| `css`                   | `css`                     |                                                      | `string`                                                             | `'\n\n\n\n\n\n\n\n\n\n\n'`      |
| `debounceTime`          | `debounce-time`           | The length of time to debounce updates to the iframe | `number`                                                             | `300`                           |
| `enableFormatting`      | `enable-formatting`       | Enables code formatting functionality                | `boolean`                                                            | `false`                         |
| `enableTemplates`       | `enable-templates`        | Ability to load example/starter templates            | `boolean`                                                            | `false`                         |
| `formattingOptions`     | --                        | Options for code formatting                          | `FormattingOptions`                                                  | `{}`                            |
| `hideEditors`           | `hide-editors`            | Hides the live editor containers                     | `boolean`                                                            | `false`                         |
| `html`                  | `html`                    |                                                      | `string`                                                             | `'\n\n\n\n\n\n\n\n\n\n\n'`      |
| `javascript`            | `javascript`              |                                                      | `string`                                                             | `'\n\n\n\n\n\n\n\n\n\n\n'`      |
| `showFormattingButtons` | `show-formatting-buttons` | Show formatting buttons in the UI                    | `boolean`                                                            | `true`                          |
| `tabbed`                | `tabbed`                  | Switches from split view to a tabbed view            | `boolean`                                                            | `false`                         |
| `templates`             | --                        | Custom starter templates for quick loading           | `{ name: string; html: string; css: string; javascript: string; }[]` | `[]`                            |
| `theme`                 | --                        |                                                      | `{ colors: Colors; dark: boolean; }`                                 | `{ colors: color, dark: true }` |


## Events

| Event           | Description                                   | Type                                                              |
| --------------- | --------------------------------------------- | ----------------------------------------------------------------- |
| `contentChange` | Event emitted when any editor content changes | `CustomEvent<{ html: string; css: string; javascript: string; }>` |


## Methods

### `formatAll() => Promise<void>`

Format all code sections

#### Returns

Type: `Promise<void>`



### `formatCss() => Promise<void>`

Format CSS code

#### Returns

Type: `Promise<void>`



### `formatHtml() => Promise<void>`

Format HTML code

#### Returns

Type: `Promise<void>`



### `formatJs() => Promise<void>`

Format JavaScript code

#### Returns

Type: `Promise<void>`



### `loadTemplate(template: { html: string; css: string; javascript: string; }) => Promise<void>`

Load a template into the editor

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [nexus-tab](../nexus-tabs)

### Graph
```mermaid
graph TD;
  code-nexus --> nexus-tab
  style code-nexus fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
