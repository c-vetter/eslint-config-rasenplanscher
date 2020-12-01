export const reactForbidForeignPropTypes = {
	id: 'react/forbid-foreign-prop-types',
	key: 'forbid-foreign-prop-types',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Forbid using another component's propTypes',
			category: 'Best Practices',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-foreign-prop-types.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowInPropTypes: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}