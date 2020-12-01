export const reactSelfClosingComp = {
	id: 'react/self-closing-comp',
	key: 'self-closing-comp',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Prevent extra closing tags for components without children',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/self-closing-comp.md'
		},
		fixable: 'code',
		schema: [
			{
				type: 'object',
				properties: {
					component: {
						default: true,
						type: 'boolean'
					},
					html: {
						default: true,
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}