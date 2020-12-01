export const reactNoStringRefs = {
	id: 'react/no-string-refs',
	key: 'no-string-refs',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Prevent string definitions for references and prevent referencing this.refs',
			category: 'Best Practices',
			recommended: true,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-string-refs.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					noTemplateLiterals: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}