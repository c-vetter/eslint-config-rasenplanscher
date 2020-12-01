export const reactNoUnsafe = {
	id: 'react/no-unsafe',
	key: 'no-unsafe',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Prevent usage of unsafe lifecycle methods',
			category: 'Best Practices',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unsafe.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					checkAliases: {
						default: false,
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}