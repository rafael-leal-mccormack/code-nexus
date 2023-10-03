import { Component, Element, Host, Prop, State, Watch, h } from '@stencil/core';
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
import { Colors, color, createTheme } from './theme';
@Component({
  tag: 'code-nexus',
  styleUrls: ['code-nexus.scss'],
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

  footerSectionEl: HTMLElement;

  editorTheme = new Compartment();

  @Element() el: HTMLCodeNexusElement;

  @State() sizeView: 'full' | 'split' = 'split';

  @Prop() theme: {
    colors: Colors;
    dark: boolean;
  } = { colors: color, dark: true };

  themeCompartment = new Compartment();

  /**
   * The length of time to debounce updates to the iframe
   */
  @Prop() debounceTime = 300;

  /**
   * Hides the live editor containers
   */
  @Prop() hideEditors = false;

  @Prop({ mutable: true }) html = '\n\n\n\n\n\n\n\n\n\n\n';
  @Watch('html')
  handleHtmlChange() {
    if (this.html !== this.htmlEditor.state.doc.toString()) {
      this.setContent('html', this.html);
    }
  }

  @Prop({ mutable: true }) css = '\n\n\n\n\n\n\n\n\n\n\n';
  @Watch('css')
  handleCssChange() {
    if (this.css !== this.cssEditor.state.doc.toString()) {
      this.setContent('css', this.css);
    }
  }

  @Prop({ mutable: true }) javascript = '\n\n\n\n\n\n\n\n\n\n\n';
  @Watch('javascript')
  handleJsChange() {
    if (this.javascript !== this.jsEditor.state.doc.toString()) {
      this.setContent('js', this.javascript);
    }
  }

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

  createEditor(contentType: Content, contentFunc: Function, parent: HTMLElement, completions: CompletionSource[]) {
    const startState = EditorState.create({
      doc: this.getContent(contentType),
      extensions: [
        basicSetup,
        createTheme(this.theme.colors, this.theme.dark),
        autocompletion({ override: completions }),
        contentFunc(),
        EditorView.updateListener.of((update: { state: { doc: { toString: () => string } } }) => {
          this.setContent(contentType, update.state.doc.toString());
          this.debouncedUpdate(this.html, this.css, this.javascript);
        }),
      ],
    });

    return new EditorView({
      state: startState,
      parent: parent,
      extensions: [],
    });
  }

  updateLiveContent = (html, css, javascript) => {
    this.html = html;
    this.css = css;
    this.javascript = javascript;

    // prepare the iframe
    this.prepareContentContainer(this.liveContentFrame);
    //call event
  };

  debouncedUpdate = debounce(this.updateLiveContent, this.debounceTime);

  componentDidLoad() {
    this.htmlEditor = this.createEditor('html', html, this.htmlEditorEl, []);
    this.cssEditor = this.createEditor('css', css, this.cssEditorEl, []);
    this.jsEditor = this.createEditor('js', javascript, this.jsEditorEl, []);

    Split([this.htmlEditorContainer, this.cssEditorContainer, this.jsEditorContainer], { minSize: 0, direction: 'vertical' });
    Split([this.editorContainer, this.liveContentContainer], {
      direction: 'horizontal',
      minSize: 0,
      onDragEnd: sizes => {
        console.log(sizes);
        sizes[0] <= 1 ? (this.sizeView = 'full') : (this.sizeView = 'split');
      },
    });

    this.applyTheme();
  }

  applyTheme() {
    this.htmlEditorEl.style.background = this.theme.colors.background;
    this.cssEditorEl.style.background = this.theme.colors.background;
    this.jsEditorEl.style.background = this.theme.colors.background;
    this.editorContainer.style.background = this.theme.colors.background;
    this.footerSectionEl.style.background = this.theme.colors.background;
  }

  prepareContentContainer(contentHost: HTMLIFrameElement) {
    contentHost.contentWindow.document.open();

    contentHost.contentWindow.document.write(/* html */ `
      <!DOCTYPE html>
      <html dir="ltr" lang="en">
        <style>${this.cssEditor.state.doc.toString()}</style>
      </html>
      <body>
        ${this.htmlEditor.state.doc.toString()}
      </body>
      <script type="module">
        ${this.jsEditor.state.doc.toString()}
      </script>
      `);

    contentHost.contentWindow.document.close();
  }

  render() {
    return (
      <Host
        class={{
          'code-nexus': true,
          [`code-nexus-view-${this.sizeView}`]: true,
          [`code-nexus-${this.theme.dark ? 'dark' : 'light'}-theme`]: true
        }}
        id="nexus"
      >
        <div class={{ 'nexus-container': true }} id="nexus-container">
          <div
            ref={el => (this.editorContainer = el)}
            style={{
              display: this.hideEditors ? 'none' : null,
            }}
            class="editor-group"
          >
            <div class="editor-panel" ref={el => (this.htmlEditorContainer = el)}>
              <div class="editor-label">HTML</div>
              <div class="editor" ref={el => (this.htmlEditorEl = el)}></div>
            </div>
            <div class="editor-panel" ref={el => (this.cssEditorContainer = el)}>
              <div class="editor-label">CSS</div>
              <div class="editor" ref={el => (this.cssEditorEl = el)}></div>
            </div>
            <div class="editor-panel" ref={el => (this.jsEditorContainer = el)}>
              <div class="editor-label">Javascript</div>
              <div class="editor" ref={el => (this.jsEditorEl = el)}></div>
            </div>
          </div>
          <div class="content-container" ref={el => (this.liveContentContainer = el)} id="content-container">
            <iframe title="Code nexus content" id="nexus-content" ref={el => (this.liveContentFrame = el)}></iframe>
          </div>
        </div>
        <section ref={el => this.footerSectionEl = el} class="footer-settings">
          <div>
            <button>Tabbed panes</button>
            <button>Split panes</button>
          </div>
          <div>
            <button
              onClick={() => {
                this.sizeView = 'split';
                this.liveContentContainer.style.width = '50%';
              }}
            >
              Split
            </button>
            <button
              onClick={() => {
                this.sizeView = 'full';
                this.liveContentContainer.style.width = '100%';
                this.editorContainer.style.width = '0';
              }}
            >
              Full page
            </button>
          </div>
        </section>
      </Host>
    );
  }
}
