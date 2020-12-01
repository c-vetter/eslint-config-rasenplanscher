export const reactJsxFirstPropNewLine = {
	id: 'react/jsx-first-prop-new-line',
	key: 'jsx-first-prop-new-line',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Ensure proper position of the first property in JSX',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-first-prop-new-line.md'
		},
		fixable: 'code',
		schema: [
			{
				enum: [
					'always',
					'never',
					'multiline',
					'multiline-multiprop'
				]
			}
		]
	}
}