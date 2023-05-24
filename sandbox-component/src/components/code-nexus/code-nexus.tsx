import { Component, Element, Host, Prop, h } from '@stencil/core';
import { basicSetup } from 'codemirror';
import { EditorView } from '@codemirror/view';
import { Compartment, EditorState } from '@codemirror/state';
import { CompletionSource, autocompletion } from '@codemirror/autocomplete';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import { Content } from './code-nexus-utils';
import debounce from 'lodash.debounce';
import Split from 'split.js';
@Component({
  tag: 'code-nexus',
  styleUrl: 'code-nexus.scss',
  shadow: true,
})
export class CodeNexus {
  editorContainer: HTMLElement;
  jsEditor: EditorView;
  jsEditorEl: HTMLDivElement;
  jsEditorContainer: HTMLElement;

  cssEditor: EditorView;
  cssEditorEl: HTMLDivElement;
  cssEditorContainer: HTMLElement;

  htmlEditor: EditorView;
  htmlEditorEl: HTMLDivElement;
  htmlEditorContainer: HTMLElement;

  liveContentContainer: HTMLElement;
  liveContentFrame: HTMLIFrameElement;

  editorTheme = new Compartment();

  @Element() el: HTMLCodeNexusElement;

  /**
   * The length of time to debounce updates to the iframe
   */
  @Prop() debounceTime = 300;

  /**
   * Hides the live editor containers
   */
  @Prop() hideEditors = false;

  @Prop() html = '';

  @Prop() css = '';

  @Prop() javascript = '';

  getContent(contentType: Content) {
    if (contentType === 'html') {
      return this.html;
    }

    if (contentType === 'css') {
      return this.css;
    }

    if (contentType === 'js') {
      return this.javascript;
    }

    return '';
  }

  setContent(contentType: Content, content: string) {
    if (contentType === 'html') {
      this.html = content;
    }

    if (contentType === 'css') {
      this.css = content;
    }

    if (contentType === 'js') {
      this.javascript = content;
    }
  }
  createEditor(contentType: Content, contentFunc: Function, editor: EditorView, parent: HTMLElement, completions: CompletionSource[]) {
    const startState = EditorState.create({
      doc: this.getContent(contentType),
      extensions: [
        basicSetup,
        autocompletion({ override: completions }),
        contentFunc(),
        EditorView.updateListener.of((update: { state: { doc: { toString: () => string } } }) => {
          this.setContent(contentType, update.state.doc.toString());
          this.debouncedUpdate(this.html, this.css, this.javascript);
        }),
      ],
    });

    editor = new EditorView({
      state: startState,
      parent: parent,
      extensions: []
    })
  }

  updateLiveContent = (html, css, javascript) => {
    this.html = html;
    this.css = css;
    this.javascript = javascript;

    //prepare the iframe
    //call event
  };

  debouncedUpdate = debounce(this.updateLiveContent, this.debounceTime);

  componentDidLoad() {
    this.createEditor('html', html, this.htmlEditor, this.htmlEditorEl, [])
    this.createEditor('css', css, this.cssEditor, this.cssEditorEl, [])
    this.createEditor('js', javascript, this.jsEditor, this.jsEditorEl, [])

    Split([this.htmlEditorContainer, this.cssEditorContainer, this.jsEditorContainer], { minSize: 0})
    Split([this.editorContainer, this.liveContentContainer], {
      direction: 'vertical',
      minSize: 0
    })
  }

  render() {
    return (
      <Host
        class={{
          'code-nexus': true,
        }}
        id="nexus"
      >
        <div class={{'nexus-container': true}} id="nexus-container">
          <div
            ref={el => (this.editorContainer = el)}
            style={{
              display: this.hideEditors ? 'none' : null,
            }}
            class="editor-group"
          >
            <div ref={el => (this.htmlEditorContainer = el)}>
              <div class="editor-label">HTML</div>
              <div ref={el => (this.htmlEditorEl = el)}></div>
            </div>
            <div ref={el => (this.cssEditorContainer = el)}>
              <div class="editor-label">CSS</div>
              <div ref={el => (this.cssEditorEl = el)}></div>
            </div>
            <div ref={el => (this.jsEditorContainer = el)}>
              <div class="editor-label">Javascript</div>
              <div ref={el => (this.jsEditorEl = el)}></div>
            </div>
          </div>
          <div ref={el => this.liveContentContainer = el} id="content-container">
            <iframe title="Code nexus content" id="nexus-content" ref={el => (this.liveContentFrame = el)}></iframe>
          </div>
        </div>
      </Host>
    );
  }
}
