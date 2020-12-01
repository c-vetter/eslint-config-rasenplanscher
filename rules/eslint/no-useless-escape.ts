export const noUselessEscape = {
	id: 'no-useless-escape',
	key: 'no-useless-escape',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow unnecessary escape characters',
			category: 'Best Practices',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-useless-escape',
			suggestion: true
		},
		messages: {
			unnecessaryEscape: 'Unnecessary escape character: \\{{character}}.',
			removeEscape: 'Remove the `\\`. This maintains the current functionality.',
			escapeBackslash: 'Replace the `\\` with `\\\\` to include the actual backslash character.'
		},
		schema: []
	}
}