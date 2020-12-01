export const reactJsxFragments = {
	id: 'react/jsx-fragments',
	key: 'jsx-fragments',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Enforce shorthand or standard form for React fragments',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-fragments.md'
		},
		fixable: 'code',
		schema: [
			{
				enum: [
					'syntax',
					'element'
				]
			}
		]
	}
}