export const varsOnTop = {
	id: 'vars-on-top',
	key: 'vars-on-top',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require `var` declarations be placed at the top of their containing scope',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/vars-on-top'
		},
		schema: [],
		messages: {
			top: 'All ‘var’ declarations must be at the top of the function scope.'
		}
	}
}