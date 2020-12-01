export const typescriptEslintNoShadow = {
	id: '@typescript-eslint/no-shadow',
	key: 'no-shadow',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallow variable declarations from shadowing variables declared in the outer scope',
			category: 'Variables',
			recommended: false,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-shadow.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					builtinGlobals: {
						type: 'boolean'
					},
					hoist: {
						enum: [
							'all',
							'functions',
							'never'
						]
					},
					allow: {
						type: 'array',
						items: {
							type: 'string'
						}
					},
					ignoreTypeValueShadow: {
						type: 'boolean'
					},
					ignoreFunctionTypeParameterNameValueShadow: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			noShadow: '‘{{name}}’ is already declared in the upper scope.'
		}
	}
}