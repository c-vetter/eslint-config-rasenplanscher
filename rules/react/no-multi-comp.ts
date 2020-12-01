export const reactNoMultiComp = {
	id: 'react/no-multi-comp',
	key: 'no-multi-comp',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Prevent multiple component definition per file',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-multi-comp.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					ignoreStateless: {
						default: false,
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}