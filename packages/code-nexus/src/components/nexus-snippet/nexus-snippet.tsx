import { Component, Host, Prop, h, Element } from '@stencil/core';
import { Colors, color, createTheme } from '../../themes/theme';
import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';

@Component({
  tag: 'nexus-snippet',
  styleUrl: 'nexus-snippet.scss',
  shadow: true,
})
export class NexusSnippet {
  @Element() el: HTMLElement;
  
  private codeContainer?: HTMLElement;
  private editorView?: EditorView;
  private slotObserver: MutationObserver;

  /**
   * The content inside the snippet (inline code)
   */
  @Prop() content: string;

  /**
   * The type of code (for syntax highlighting)
   */
  @Prop() type: 'js' | 'html' | 'css' = 'js';

  /**
   * Theme configuration
   */
  @Prop() theme: {
    colors: Colors;
    dark: boolean;
  } = { colors: color, dark: true };

  getLanguageExtension() {
    switch (this.type) {
      case 'html': return html();
      case 'css': return css();
      case 'js': 
      default: return javascript();
    }
  }

  componentDidLoad() {
    // Process slot content or use the content prop
    this.processContent();
    
    // Set up mutation observer for slot changes
    this.setupSlotObserver();
  }

  disconnectedCallback() {
    // Clean up editor when component is destroyed
    if (this.editorView) {
      this.editorView.destroy();
    }
    
    // Disconnect the observer
    if (this.slotObserver) {
      this.slotObserver.disconnect();
    }
  }
  
  private setupSlotObserver() {
    // Create a mutation observer to watch for changes to the slot content
    this.slotObserver = new MutationObserver(() => {
      this.processContent();
    });
    
    // Start observing the component for content changes
    this.slotObserver.observe(this.el, {
      childList: true,
      characterData: true,
      subtree: true
    });
  }

  private processContent() {
    // Get content from either the content prop or the slot
    let snippetContent = this.content;
    
    // If no content prop, get from slot and handle HTML elements
    if (!snippetContent) {
      const slot = this.el.querySelector('slot') || this.el;
      
      // If HTML type, get the actual HTML source
      if (this.type === 'html') {
        snippetContent = this.el.innerHTML.trim();
        
        // Remove any script tags that might be added to serialize the component
        snippetContent = snippetContent.replace(/<script>[\s\S]*?<\/script>/g, '');
      } else {
        // For other types, get the text content
        snippetContent = slot.textContent || '';
      }
    }
    
    // Create or update the CodeMirror editor
    this.createOrUpdateEditor(snippetContent);
  }
  
  private createOrUpdateEditor(content: string) {
    // If editor already exists, update it
    if (this.editorView) {
      this.editorView.dispatch({
        changes: { from: 0, to: this.editorView.state.doc.length, insert: content }
      });
      return;
    }
    
    // Create a new editor
    const startState = EditorState.create({
      doc: content,
      extensions: [
        EditorState.readOnly.of(true),
        createTheme(this.theme.colors, this.theme.dark),
        this.getLanguageExtension()
      ]
    });

    this.editorView = new EditorView({
      state: startState,
      parent: this.codeContainer,
    });
  }

  render() {
    return (
      <Host
        class={{
          'nexus-snippet': true,
          [`nexus-snippet-${this.type}`]: true,
          [`nexus-snippet-${this.theme.dark ? 'dark' : 'light'}-theme`]: true,
        }}
      >
        <div class="snippet-container" ref={(el) => this.codeContainer = el}></div>
        <slot></slot>
      </Host>
    );
  }
} 