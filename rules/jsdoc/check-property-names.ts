export const jsdocCheckPropertyNames = {
	id: 'jsdoc/check-property-names',
	key: 'check-property-names',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-property-names'
		},
		fixable: 'code',
		schema: [
			{
				additionalProperties: false,
				properties: {
					enableFixer: {
						type: 'boolean'
					}
				},
				type: 'object'
			}
		],
		type: 'suggestion'
	}
}