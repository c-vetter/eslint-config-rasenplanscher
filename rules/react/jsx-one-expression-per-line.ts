export const reactJsxOneExpressionPerLine = {
	id: 'react/jsx-one-expression-per-line',
	key: 'jsx-one-expression-per-line',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Limit to one expression per line in JSX',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-one-expression-per-line.md'
		},
		fixable: 'whitespace',
		schema: [
			{
				type: 'object',
				properties: {
					allow: {
						enum: [
							'none',
							'literal',
							'single-child'
						]
					}
				},
				default: {
					allow: 'none'
				},
				additionalProperties: false
			}
		]
	}
}