export const reactSortComp = {
	id: 'react/sort-comp',
	key: 'sort-comp',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Enforce component methods order',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/sort-comp.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					order: {
						type: 'array',
						items: {
							type: 'string'
						}
					},
					groups: {
						type: 'object',
						patternProperties: {
							'^.*$': {
								type: 'array',
								items: {
									type: 'string'
								}
							}
						}
					}
				},
				additionalProperties: false
			}
		]
	}
}