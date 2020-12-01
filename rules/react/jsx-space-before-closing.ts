export const reactJsxSpaceBeforeClosing = {
	id: 'react/jsx-space-before-closing',
	key: 'jsx-space-before-closing',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		deprecated: true,
		docs: {
			description: 'Validate spacing before closing bracket in JSX',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-space-before-closing.md'
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