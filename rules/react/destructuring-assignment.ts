export const reactDestructuringAssignment = {
	id: 'react/destructuring-assignment',
	key: 'destructuring-assignment',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Enforce consistent usage of destructuring assignment of props, state, and context',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/destructuring-assignment.md'
		},
		schema: [
			{
				type: 'string',
				enum: [
					'always',
					'never'
				]
			},
			{
				type: 'object',
				properties: {
					ignoreClassFields: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}