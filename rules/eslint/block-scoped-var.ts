export const blockScopedVar = {
	id: 'block-scoped-var',
	key: 'block-scoped-var',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce the use of variables within the scope they are defined',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/block-scoped-var'
		},
		schema: [],
		messages: {
			outOfScope: '‘{{name}}’ used outside of binding context.'
		}
	}
}