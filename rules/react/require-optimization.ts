export const reactRequireOptimization = {
	id: 'react/require-optimization',
	key: 'require-optimization',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Enforce React components to have a shouldComponentUpdate method',
			category: 'Best Practices',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/require-optimization.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowDecorators: {
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