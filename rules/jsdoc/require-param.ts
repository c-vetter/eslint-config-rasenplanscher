export const jsdocRequireParam = {
	id: 'jsdoc/require-param',
	key: 'require-param',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Requires that all function parameters are documented.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param'
		},
		fixable: 'code',
		schema: [
			{
				additionalProperties: false,
				properties: {
					autoIncrementBase: {
						default: 0,
						type: 'integer'
					},
					checkConstructors: {
						default: true,
						type: 'boolean'
					},
					checkDestructured: {
						default: true,
						type: 'boolean'
					},
					checkDestructuredRoots: {
						default: true,
						type: 'boolean'
					},
					checkGetters: {
						default: false,
						type: 'boolean'
					},
					checkRestProperty: {
						default: false,
						type: 'boolean'
					},
					checkSetters: {
						default: false,
						type: 'boolean'
					},
					checkTypesPattern: {
						type: 'string'
					},
					contexts: {
						items: {
							type: 'string'
						},
						type: 'array'
					},
					enableFixer: {
						type: 'boolean'
					},
					enableRestElementFixer: {
						type: 'boolean'
					},
					enableRootFixer: {
						type: 'boolean'
					},
					exemptedBy: {
						items: {
							type: 'string'
						},
						type: 'array'
					},
					unnamedRootBase: {
						items: {
							type: 'string'
						},
						type: 'array'
					}
				},
				type: 'object'
			}
		],
		type: 'suggestion'
	}
}