export const reactPreferStatelessFunction = {
	id: 'react/prefer-stateless-function',
	key: 'prefer-stateless-function',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Enforce stateless components to be written as a pure function',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/prefer-stateless-function.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					ignorePureComponents: {
						default: false,
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}