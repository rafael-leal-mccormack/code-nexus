import { CompletionSource, autocompletion } from '@codemirror/autocomplete';
import { EditorState } from '@codemirror/state';
import { Component, Host, Prop, Watch, h, Event, EventEmitter, State } from '@stencil/core';
import { basicSetup, EditorView } from 'codemirror';
import { Colors, color, createTheme } from '../../themes/theme';
import { Content } from '../code-nexus/code-nexus-utils';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { lineNumbers } from '@codemirror/view';

@Component({
  tag: 'nexus-panel',
  styleUrl: 'nexus-panel.scss',
  shadow: true,
})
export class NexusPanel {
  @Prop() content: string = '\n\n\n\n\n\n\n\n\n\n\n';
  @Watch('content')
  handleContentChange() {
    if (this.editorView && this.content !== this.editorView.state.doc.toString()) {
      this.editorView.dispatch({
        changes: { from: 0, to: this.editorView.state.doc.length, insert: this.content }
      });
    }
  }

  @Prop() type: Content = 'js';

  @Prop() panelName: string;

  @Prop() theme: {
    colors: Colors;
    dark: boolean;
  } = { colors: color, dark: true };

  @Prop() readonly = false;
  @Watch('readonly')
  handleReadonlyChange() {
    const func = this.getContentFunction(this.type);
    this.editorView.setState(EditorState.create(this.buildState(func, [])))
  }
  
  /**
   * Whether to show line numbers
   */
  @Prop() showLineNumbers = true;
  
  /**
   * Whether to enable syntax highlighting
   */
  @Prop() enableSyntaxHighlighting = true;
  
  /**
   * Event emitted when content changes
   */
  @Event() panelContentChange: EventEmitter<string>;

  /**
   * Whether to show the copy button
   */
  @Prop() showCopyButton = true;
  
  /**
   * Copy button success timeout in ms
   */
  @Prop() copySuccessTimeout = 2000;
  
  @State() copySuccess = false;

  editorContainer: HTMLElement;
  editorEl: HTMLElement;
  editorView: EditorView;

  buildState(contentFunc: Function, completions: CompletionSource[]) {
    const extensions = [
      basicSetup,
      createTheme(this.theme.colors, this.theme.dark),
      autocompletion({ override: completions }),
      EditorState.readOnly.of(this.readonly),
      EditorView.editable.of(!this.readonly),
      EditorView.updateListener.of((update: { state: { doc: { toString: () => string } } }) => {
        const newContent = update.state.doc.toString();
        this.content = newContent;
        this.panelContentChange.emit(newContent);
      })
    ];
    
    // Add language support if syntax highlighting is enabled
    if (this.enableSyntaxHighlighting) {
      extensions.push(contentFunc());
    }
    
    // Add line numbers if enabled
    if (this.showLineNumbers) {
      extensions.push(lineNumbers());
    }
    
    return {
      doc: this.content,
      extensions: extensions
    }
  }

  createEditor(contentFunc: Function, parent: HTMLElement, completions: CompletionSource[]) {
    const startState = EditorState.create(this.buildState(contentFunc, completions));

    this.editorView = new EditorView({
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

  copyToClipboard = () => {
    if (this.content) {
      navigator.clipboard.writeText(this.content)
        .then(() => {
          this.copySuccess = true;
          setTimeout(() => {
            this.copySuccess = false;
          }, this.copySuccessTimeout);
        })
        .catch(err => console.error('Failed to copy text: ', err));
    }
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
          <div class="panel-header">
            <h4 class="editor-label">{this.panelName}</h4>
            {this.showCopyButton && (
              <div class="panel-actions">
                <button 
                  class={{
                    'panel-action-button': true, 
                    'copy-button': true,
                    'copy-success': this.copySuccess
                  }} 
                  onClick={this.copyToClipboard}
                  title="Copy to clipboard"
                >
                  {this.copySuccess ? 'Copied!' : 'Copy'}
                </button>
              </div>
            )}
          </div>
          <div class="editor" ref={el => (this.editorEl = el)}></div>
        </div>
      </Host>
    );
  }
}
