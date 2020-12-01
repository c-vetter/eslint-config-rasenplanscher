export const reactForbidDomProps = {
	id: 'react/forbid-dom-props',
	key: 'forbid-dom-props',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Forbid certain props on DOM Nodes',
			category: 'Best Practices',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-dom-props.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					forbid: {
						type: 'array',
						items: {
							oneOf: [
								{
									type: 'string'
								},
								{
									type: 'object',
									properties: {
										propName: {
											type: 'string'
										},
										message: {
											type: 'string'
										}
									}
								}
							],
							minLength: 1
						},
						uniqueItems: true
					}
				},
				additionalProperties: false
			}
		]
	}
}