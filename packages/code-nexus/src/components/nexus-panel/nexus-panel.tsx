import { CompletionSource, autocompletion } from '@codemirror/autocomplete';
import { EditorState } from '@codemirror/state';
import { Component, Host, Prop, h } from '@stencil/core';
import { basicSetup, EditorView } from 'codemirror';
import { Colors, color, createTheme } from '../../themes/theme';
import { Content } from '../code-nexus/code-nexus-utils';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';

@Component({
  tag: 'nexus-panel',
  styleUrl: 'nexus-panel.scss',
  shadow: true,
})
export class NexusPanel {
  @Prop() content: string = '\n\n\n\n\n\n\n\n\n\n\n';

  @Prop() type: Content = 'js';

  @Prop() panelName: string;

  @Prop() theme: {
    colors: Colors;
    dark: boolean;
  } = { colors: color, dark: true };

  editorContainer: HTMLElement;
  editorEl: HTMLElement;

  createEditor(contentFunc: Function, parent: HTMLElement, completions: CompletionSource[]) {
    const startState = EditorState.create({
      doc: this.content,
      extensions: [
        basicSetup,
        createTheme(this.theme.colors, this.theme.dark),
        autocompletion({ override: completions }),
        contentFunc(),
        EditorView.updateListener.of((update: { state: { doc: { toString: () => string } } }) => {
          this.content = update.state.doc.toString();
        }),
      ],
    });

    return new EditorView({
      state: startState,
      parent: parent,
      extensions: [],
    });
  }

  getContentFunction(content: Content) {
    if (content === 'html') {
      return html;
    }

    if (content === 'css') {
      return css;
    }

    if (content === 'js') {
      return javascript;
    }
  }

  componentDidLoad() {
    const func = this.getContentFunction(this.type);
    this.createEditor(func, this.editorEl, []);
  }

  componentDidRender() {
    this.editorContainer.style.background = this.theme.colors.background;
  }

  render() {
    return (
      <Host
        class={{
          'code-nexus-panel': true,
          [`code-nexus-${this.theme.dark ? 'dark' : 'light'}-theme`]: true,
        }}
      >
        <div
          class={{
            'editor-panel': true,
          }}
          ref={el => (this.editorContainer = el)}
        >
          <div class="editor-label">{this.panelName}</div>
          <div class="editor" ref={el => (this.editorEl = el)}></div>
        </div>{' '}
      </Host>
    );
  }
}
