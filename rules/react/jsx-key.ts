export const reactJsxKey = {
	id: 'react/jsx-key',
	key: 'jsx-key',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Report missing `key` props in iterators/collection literals',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-key.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					checkFragmentShorthand: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		]
	}
}