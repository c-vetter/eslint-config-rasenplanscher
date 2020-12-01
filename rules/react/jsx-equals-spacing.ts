export const reactJsxEqualsSpacing = {
	id: 'react/jsx-equals-spacing',
	key: 'jsx-equals-spacing',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Disallow or enforce spaces around equal signs in JSX attributes',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-equals-spacing.md'
		},
		fixable: 'code',
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