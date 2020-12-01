export const noExtraSemi = {
	id: 'no-extra-semi',
	key: 'no-extra-semi',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow unnecessary semicolons',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-extra-semi'
		},
		fixable: 'code',
		schema: [],
		messages: {
			unexpected: 'Unnecessary semicolon.'
		}
	}
}