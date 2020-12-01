export const reactForbidElements = {
	id: 'react/forbid-elements',
	key: 'forbid-elements',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Forbid certain elements',
			category: 'Best Practices',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-elements.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					forbid: {
						type: 'array',
						items: {
							anyOf: [
								{
									type: 'string'
								},
								{
									type: 'object',
									properties: {
										element: {
											type: 'string'
										},
										message: {
											type: 'string'
										}
									},
									required: [
										'element'
									],
									additionalProperties: false
								}
							]
						}
					}
				},
				additionalProperties: false
			}
		]
	}
}