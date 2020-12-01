export const reactForbidPropTypes = {
	id: 'react/forbid-prop-types',
	key: 'forbid-prop-types',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Forbid certain propTypes',
			category: 'Best Practices',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-prop-types.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					forbid: {
						type: 'array',
						items: {
							type: 'string'
						}
					},
					checkContextTypes: {
						type: 'boolean'
					},
					checkChildContextTypes: {
						type: 'boolean'
					}
				},
				additionalProperties: true
			}
		]
	}
}