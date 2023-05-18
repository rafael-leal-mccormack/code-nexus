import { Component, Element, Host, Prop, h } from '@stencil/core';
import { EditorView } from '@codemirror/view';
import { Compartment } from '@codemirror/state';
@Component({
  tag: 'code-nexus',
  styleUrl: 'code-nexus.scss',
  shadow: true,
})
export class CodeNexus {
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

  @Prop() debounceTime = 300;

  @Prop() hideEditors = false;

  render() {
    return (
      <Host>
        <div id="live-code-container">
          <div></div>
        </div>
      </Host>
    );
  }
}
