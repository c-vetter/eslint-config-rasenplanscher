export const reactJsxBooleanValue = {
	id: 'react/jsx-boolean-value',
	key: 'jsx-boolean-value',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Enforce boolean attributes notation in JSX',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-boolean-value.md'
		},
		fixable: 'code',
		schema: {
			anyOf: [
				{
					type: 'array',
					items: [
						{
							enum: [
								'always',
								'never'
							]
						}
					],
					additionalItems: false
				},
				{
					type: 'array',
					items: [
						{
							enum: [
								'always'
							]
						},
						{
							type: 'object',
							additionalProperties: false,
							properties: {
								never: {
									type: 'array',
									items: {
										type: 'string',
										minLength: 1
									},
									uniqueItems: true
								}
							}
						}
					],
					additionalItems: false
				},
				{
					type: 'array',
					items: [
						{
							enum: [
								'never'
							]
						},
						{
							type: 'object',
							additionalProperties: false,
							properties: {
								always: {
									type: 'array',
									items: {
										type: 'string',
										minLength: 1
									},
									uniqueItems: true
								}
							}
						}
					],
					additionalItems: false
				}
			]
		}
	}
}