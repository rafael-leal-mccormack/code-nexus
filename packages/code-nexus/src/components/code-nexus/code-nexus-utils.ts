import { Completion, CompletionContext } from '@codemirror/autocomplete';

export function autocompleteCompletions(context: CompletionContext, cssOptions: Completion[]) {
  const word = context.matchBefore(/[\w(-]*/)

  if (word.from === word.to && !context.explicit) {
    return null
  }

  return {
    from: word.from,
    options: [...cssOptions]
  }
}

export type Content = 'html' | 'css' | 'js';