export const noOctal = {
	id: 'no-octal',
	key: 'no-octal',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow octal literals',
			category: 'Best Practices',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-octal'
		},
		schema: [],
		messages: {
			noOcatal: 'Octal literals should not be used.'
		}
	}
}