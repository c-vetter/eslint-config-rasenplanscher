export const jsdocCheckParamNames = {
	id: 'jsdoc/check-param-names',
	key: 'check-param-names',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Ensures that parameter names in JSDoc match those in the function declaration.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names'
		},
		fixable: 'code',
		schema: [
			{
				additionalProperties: false,
				properties: {
					allowExtraTrailingParamDocs: {
						type: 'boolean'
					},
					checkDestructured: {
						type: 'boolean'
					},
					checkRestProperty: {
						type: 'boolean'
					},
					checkTypesPattern: {
						type: 'string'
					},
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