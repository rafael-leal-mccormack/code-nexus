# nexus-panel



<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute                    | Description                           | Type                                 | Default                         |
| -------------------------- | ---------------------------- | ------------------------------------- | ------------------------------------ | ------------------------------- |
| `content`                  | `content`                    |                                       | `string`                             | `'\n\n\n\n\n\n\n\n\n\n\n'`      |
| `copySuccessTimeout`       | `copy-success-timeout`       | Copy button success timeout in ms     | `number`                             | `2000`                          |
| `enableSyntaxHighlighting` | `enable-syntax-highlighting` | Whether to enable syntax highlighting | `boolean`                            | `true`                          |
| `panelName`                | `panel-name`                 |                                       | `string`                             | `undefined`                     |
| `readonly`                 | `readonly`                   |                                       | `boolean`                            | `false`                         |
| `showCopyButton`           | `show-copy-button`           | Whether to show the copy button       | `boolean`                            | `true`                          |
| `showLineNumbers`          | `show-line-numbers`          | Whether to show line numbers          | `boolean`                            | `true`                          |
| `theme`                    | --                           |                                       | `{ colors: Colors; dark: boolean; }` | `{ colors: color, dark: true }` |
| `type`                     | `type`                       |                                       | `"css" \| "html" \| "js"`            | `'js'`                          |


## Events

| Event                | Description                        | Type                  |
| -------------------- | ---------------------------------- | --------------------- |
| `panelContentChange` | Event emitted when content changes | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
