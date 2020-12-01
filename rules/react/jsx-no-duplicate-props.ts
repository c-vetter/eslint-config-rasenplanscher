export const reactJsxNoDuplicateProps = {
	id: 'react/jsx-no-duplicate-props',
	key: 'jsx-no-duplicate-props',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Enforce no duplicate props',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-duplicate-props.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					ignoreCase: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}