import { EditorView } from '@codemirror/view';
import { Extension } from '@codemirror/state';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';

// Updated colors for a more modern, vibrant look
const chalky = '#e5c07b',
  coral = '#e06c75',
  cyan = '#56b6c2',
  invalid = '#ffffff',
  ivory = '#abb2bf',
  stone = '#8a91a6', // Brightened compared to original to increase contrast
  malibu = '#61afef',
  sage = '#98c379',
  whiskey = '#d19a66',
  violet = '#c678dd',
  darkBackground = '#1e2227',
  highlightBackground = '#2c313c',
  background = '#282c34',
  tooltipBackground = '#353a42',
  selection = '#3E4451',
  cursor = '#61afef';

export interface Colors {
  chalky: string;
  coral: string;
  cyan: string;
  invalid: string;
  ivory: string;
  stone: string;
  malibu: string;
  sage: string;
  whiskey: string;
  violet: string;
  darkBackground: string;
  highlightBackground: string;
  background: string;
  tooltipBackground: string;
  selection: string;
  cursor: string;
}
/// The colors used in the theme, as CSS color strings.
export const color: Colors = {
  chalky,
  coral,
  cyan,
  invalid,
  ivory,
  stone,
  malibu,
  sage,
  whiskey,
  violet,
  darkBackground,
  highlightBackground,
  background,
  tooltipBackground,
  selection,
  cursor,
};

export const themeBuilder = (colors = color, dark = true) => {
  return EditorView.theme(
    {
      '&': {
        color: colors.ivory,
        backgroundColor: colors.background,
        fontSize: '14px',
        fontFamily: '"Roboto Mono", monospace',
      },

      '.cm-content': {
        caretColor: colors.cursor,
        padding: '10px 0',
        lineHeight: '1.6',
      },

      '.cm-cursor, .cm-dropCursor': { 
        borderLeftColor: colors.cursor,
        borderLeftWidth: '2px'
      },
      
      '&.cm-focused .cm-cursor': {
        borderLeftWidth: '2px'
      },
      
      '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': { 
        backgroundColor: colors.selection 
      },

      '.cm-panels': { 
        backgroundColor: colors.darkBackground, 
        color: colors.ivory,
        borderTop: 'none',
        borderBottom: 'none',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)'
      },
      
      '.cm-panels.cm-panels-top': { 
        borderBottom: `2px solid ${dark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.1)'}` 
      },
      
      '.cm-panels.cm-panels-bottom': { 
        borderTop: `2px solid ${dark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.1)'}` 
      },

      '.cm-searchMatch': {
        backgroundColor: 'rgba(113, 161, 255, 0.4)',
        outline: '1px solid #457dff',
        borderRadius: '2px',
      },
      
      '.cm-searchMatch.cm-searchMatch-selected': {
        backgroundColor: 'rgba(97, 153, 255, 0.35)',
      },

      '.cm-activeLine': { 
        backgroundColor: 'rgba(102, 153, 255, 0.07)'
      },
      
      '.cm-selectionMatch': { 
        backgroundColor: 'rgba(170, 254, 102, 0.15)',
        borderRadius: '2px',
      },

      '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
        backgroundColor: 'rgba(186, 208, 248, 0.3)',
        borderRadius: '2px',
      },

      '.cm-gutters': {
        backgroundColor: dark ? colors.darkBackground : '#f5f7fa',
        color: colors.stone,
        border: 'none',
        borderRight: `1px solid ${dark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
        paddingRight: '8px',
      },
      
      '.cm-lineNumbers': {
        minWidth: '3em',
      },
      
      '.cm-lineNumbers .cm-gutterElement': {
        padding: '0 8px 0 4px',
        fontSize: '12px',
      },

      '.cm-activeLineGutter': {
        backgroundColor: colors.highlightBackground,
      },

      '.cm-foldPlaceholder': {
        backgroundColor: 'transparent',
        border: 'none',
        color: '#ddd',
        borderRadius: '3px',
        margin: '0 2px',
      },

      '.cm-tooltip': {
        border: 'none',
        backgroundColor: colors.tooltipBackground,
        borderRadius: '4px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        padding: '6px 8px',
      },
      
      '.cm-tooltip .cm-tooltip-arrow:before': {
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
      },
      
      '.cm-tooltip .cm-tooltip-arrow:after': {
        borderTopColor: colors.tooltipBackground,
        borderBottomColor: colors.tooltipBackground,
      },
      
      '.cm-tooltip-autocomplete': {
        '& > ul': {
          fontFamily: '"Roboto Mono", monospace',
          fontSize: '13px',
          maxHeight: '250px',
        },
        '& > ul > li': {
          padding: '4px 8px',
        },
        '& > ul > li[aria-selected]': {
          backgroundColor: colors.highlightBackground,
          color: colors.ivory,
          borderRadius: '3px',
        },
      },
    },
    { dark: dark },
  );
};

export const syntaxThemeBuilder = (colors = color) =>
  HighlightStyle.define([
    { tag: t.keyword, color: colors.violet, fontWeight: 'bold' },
    { tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName], color: colors.coral },
    { tag: [t.function(t.variableName), t.labelName], color: colors.malibu, fontWeight: '500' },
    { tag: [t.color, t.constant(t.name), t.standard(t.name)], color: colors.whiskey },
    { tag: [t.definition(t.name), t.separator], color: colors.ivory },
    { tag: [t.typeName, t.className, t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: colors.chalky },
    { tag: [t.operator, t.operatorKeyword, t.url, t.escape, t.regexp, t.link, t.special(t.string)], color: colors.cyan },
    { tag: [t.meta, t.comment], color: colors.stone, fontStyle: 'italic' },
    { tag: t.strong, fontWeight: 'bold' },
    { tag: t.emphasis, fontStyle: 'italic' },
    { tag: t.strikethrough, textDecoration: 'line-through' },
    { tag: t.link, color: colors.stone, textDecoration: 'underline' },
    { tag: t.heading, fontWeight: 'bold', color: colors.coral },
    { tag: [t.atom, t.bool, t.special(t.variableName)], color: colors.whiskey },
    { tag: [t.processingInstruction, t.string, t.inserted], color: colors.sage },
    { tag: t.invalid, color: colors.invalid, fontWeight: 'bold' },
  ]);

/// The highlighting style for code in the One Dark theme.

/// Extension to enable the One Dark theme (both the editor theme and
/// the highlight style).

export const createTheme: (colors: Colors, dark: boolean) => Extension = (colors = color, dark = false) => [themeBuilder(colors, dark), syntaxHighlighting(syntaxThemeBuilder(colors))];
