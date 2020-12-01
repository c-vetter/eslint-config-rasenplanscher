export const reactPreferEs6Class = {
	id: 'react/prefer-es6-class',
	key: 'prefer-es6-class',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Enforce ES5 or ES6 class for React Components',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/prefer-es6-class.md'
		},
		schema: [
			{
				enum: [
					'always',
					'never'
				]
			}
		]
	}
}