export const reactSortPropTypes = {
	id: 'react/sort-prop-types',
	key: 'sort-prop-types',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Enforce propTypes declarations alphabetical sorting',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/sort-prop-types.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					requiredFirst: {
						type: 'boolean'
					},
					callbacksLast: {
						type: 'boolean'
					},
					ignoreCase: {
						type: 'boolean'
					},
					noSortAlphabetically: {
						type: 'boolean'
					},
					sortShapeProp: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}