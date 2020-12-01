export const reactJsxTagSpacing = {
	id: 'react/jsx-tag-spacing',
	key: 'jsx-tag-spacing',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Validate whitespace in and around the JSX opening and closing brackets',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-tag-spacing.md'
		},
		fixable: 'whitespace',
		schema: [
			{
				type: 'object',
				properties: {
					closingSlash: {
						enum: [
							'always',
							'never',
							'allow'
						]
					},
					beforeSelfClosing: {
						enum: [
							'always',
							'never',
							'allow'
						]
					},
					afterOpening: {
						enum: [
							'always',
							'allow-multiline',
							'never',
							'allow'
						]
					},
					beforeClosing: {
						enum: [
							'always',
							'never',
							'allow'
						]
					}
				},
				default: {
					closingSlash: 'never',
					beforeSelfClosing: 'always',
					afterOpening: 'never',
					beforeClosing: 'allow'
				},
				additionalProperties: false
			}
		]
	}
}