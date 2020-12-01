export const jsdocValidTypes = {
	id: 'jsdoc/valid-types',
	key: 'valid-types',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Requires all types to be valid JSDoc or Closure compiler types without syntax errors.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-valid-types'
		},
		schema: [
			{
				additionalProperies: false,
				properties: {
					allowEmptyNamepaths: {
						default: false,
						type: 'boolean'
					}
				},
				type: 'object'
			}
		],
		type: 'suggestion'
	}
}