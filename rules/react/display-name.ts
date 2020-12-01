export const reactDisplayName = {
	id: 'react/display-name',
	key: 'display-name',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Prevent missing displayName in a React component definition',
			category: 'Best Practices',
			recommended: true,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/display-name.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					ignoreTranspilerName: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}