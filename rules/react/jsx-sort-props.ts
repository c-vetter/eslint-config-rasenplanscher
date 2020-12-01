export const reactJsxSortProps = {
	id: 'react/jsx-sort-props',
	key: 'jsx-sort-props',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Enforce props alphabetical sorting',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-sort-props.md'
		},
		fixable: 'code',
		schema: [
			{
				type: 'object',
				properties: {
					callbacksLast: {
						type: 'boolean'
					},
					shorthandFirst: {
						type: 'boolean'
					},
					shorthandLast: {
						type: 'boolean'
					},
					ignoreCase: {
						type: 'boolean'
					},
					noSortAlphabetically: {
						type: 'boolean'
					},
					reservedFirst: {
						type: [
							'array',
							'boolean'
						]
					}
				},
				additionalProperties: false
			}
		]
	}
}