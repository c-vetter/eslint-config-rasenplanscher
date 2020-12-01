export const reactButtonHasType = {
	id: 'react/button-has-type',
	key: 'button-has-type',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Forbid “button” element without an explicit “type” attribute',
			category: 'Possible Errors',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/button-has-type.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					button: {
						default: true,
						type: 'boolean'
					},
					submit: {
						default: true,
						type: 'boolean'
					},
					reset: {
						default: true,
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}