export const reactJsxCurlyBracePresence = {
	id: 'react/jsx-curly-brace-presence',
	key: 'jsx-curly-brace-presence',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Disallow unnecessary JSX expressions when literals alone are sufficient or enfore JSX expressions on literals in JSX children or attributes',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-curly-brace-presence.md'
		},
		fixable: 'code',
		schema: [
			{
				oneOf: [
					{
						type: 'object',
						properties: {
							props: {
								enum: [
									'always',
									'never',
									'ignore'
								]
							},
							children: {
								enum: [
									'always',
									'never',
									'ignore'
								]
							}
						},
						additionalProperties: false
					},
					{
						enum: [
							'always',
							'never',
							'ignore'
						]
					}
				]
			}
		]
	}
}