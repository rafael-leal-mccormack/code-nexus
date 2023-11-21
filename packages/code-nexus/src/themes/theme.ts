import { EditorView } from '@codemirror/view';
import { Extension } from '@codemirror/state';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';

// Using https://github.com/one-dark/vscode-one-dark-theme/ as reference for the colors

const chalky = '#e5c07b',
  coral = '#e06c75',
  cyan = '#56b6c2',
  invalid = '#ffffff',
  ivory = '#abb2bf',
  stone = '#7d8799', // Brightened compared to original to increase contrast
  malibu = '#61afef',
  sage = '#98c379',
  whiskey = '#d19a66',
  violet = '#c678dd',
  darkBackground = '#21252b',
  highlightBackground = '#2c313a',
  background = '#282c34',
  tooltipBackground = '#353a42',
  selection = '#3E4451',
  cursor = '#528bff';

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
      },

      '.cm-content': {
        caretColor: colors.cursor,
      },

      '.cm-cursor, .cm-dropCursor': { borderLeftColor: colors.cursor },
      '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': { backgroundColor: colors.selection },

      '.cm-panels': { backgroundColor: colors.darkBackground, color: colors.ivory },
      '.cm-panels.cm-panels-top': { borderBottom: `2px solid ${dark ? 'black' : 'white'}` },
      '.cm-panels.cm-panels-bottom': { borderTop: `2px solid ${dark ? 'black' : 'white'}` },

      '.cm-searchMatch': {
        backgroundColor: '#72a1ff59',
        outline: '1px solid #457dff',
      },
      '.cm-searchMatch.cm-searchMatch-selected': {
        backgroundColor: '#6199ff2f',
      },

      '.cm-activeLine': { backgroundColor: '#6699ff0b' },
      '.cm-selectionMatch': { backgroundColor: '#aafe661a' },

      '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
        backgroundColor: '#bad0f847',
      },

      '.cm-gutters': {
        backgroundColor: colors.background,
        color: colors.stone,
        border: 'none',
      },

      '.cm-activeLineGutter': {
        backgroundColor: colors.highlightBackground,
      },

      '.cm-foldPlaceholder': {
        backgroundColor: 'transparent',
        border: 'none',
        color: '#ddd',
      },

      '.cm-tooltip': {
        border: 'none',
        backgroundColor: colors.tooltipBackground,
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
        '& > ul > li[aria-selected]': {
          backgroundColor: colors.highlightBackground,
          color: colors.ivory,
        },
      },
    },
    { dark: dark },
  );
};

export const syntaxThemeBuilder = (colors = color) =>
  HighlightStyle.define([
    { tag: t.keyword, color: colors.violet },
    { tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName], color: colors.coral },
    { tag: [t.function(t.variableName), t.labelName], color: colors.malibu },
    { tag: [t.color, t.constant(t.name), t.standard(t.name)], color: colors.whiskey },
    { tag: [t.definition(t.name), t.separator], color: colors.ivory },
    { tag: [t.typeName, t.className, t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: colors.chalky },
    { tag: [t.operator, t.operatorKeyword, t.url, t.escape, t.regexp, t.link, t.special(t.string)], color: colors.cyan },
    { tag: [t.meta, t.comment], color: colors.stone },
    { tag: t.strong, fontWeight: 'bold' },
    { tag: t.emphasis, fontStyle: 'italic' },
    { tag: t.strikethrough, textDecoration: 'line-through' },
    { tag: t.link, color: colors.stone, textDecoration: 'underline' },
    { tag: t.heading, fontWeight: 'bold', color: coral },
    { tag: [t.atom, t.bool, t.special(t.variableName)], color: colors.whiskey },
    { tag: [t.processingInstruction, t.string, t.inserted], color: colors.sage },
    { tag: t.invalid, color: colors.invalid },
  ]);

/// The highlighting style for code in the One Dark theme.

/// Extension to enable the One Dark theme (both the editor theme and
/// the highlight style).

export const createTheme: (colors: Colors, dark: boolean) => Extension = (colors = color, dark = false) => [themeBuilder(colors, dark), syntaxHighlighting(syntaxThemeBuilder(colors))];
