export const reactNoUnknownProperty = {
	id: 'react/no-unknown-property',
	key: 'no-unknown-property',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Prevent usage of unknown DOM property',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unknown-property.md'
		},
		fixable: 'code',
		schema: [
			{
				type: 'object',
				properties: {
					ignore: {
						type: 'array',
						items: {
							type: 'string'
						}
					}
				},
				additionalProperties: false
			}
		]
	}
}