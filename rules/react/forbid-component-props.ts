export const reactForbidComponentProps = {
	id: 'react/forbid-component-props',
	key: 'forbid-component-props',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Forbid certain props on components',
			category: 'Best Practices',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-component-props.md'
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
										allowedFor: {
											type: 'array',
											uniqueItems: true,
											items: {
												type: 'string'
											}
										},
										message: {
											type: 'string'
										}
									}
								}
							]
						}
					}
				}
			}
		]
	}
}