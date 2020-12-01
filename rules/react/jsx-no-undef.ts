export const reactJsxNoUndef = {
	id: 'react/jsx-no-undef',
	key: 'jsx-no-undef',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Disallow undeclared variables in JSX',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-undef.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowGlobals: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}