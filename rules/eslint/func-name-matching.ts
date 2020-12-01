export const funcNameMatching = {
	id: 'func-name-matching',
	key: 'func-name-matching',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require function names to match the name of the variable or property to which they are assigned',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/func-name-matching'
		},
		schema: {
			anyOf: [
				{
					type: 'array',
					additionalItems: false,
					items: [
						{
							enum: [
								'always',
								'never'
							]
						},
						{
							type: 'object',
							properties: {
								considerPropertyDescriptor: {
									type: 'boolean'
								},
								includeCommonJSModuleExports: {
									type: 'boolean'
								}
							},
							additionalProperties: false
						}
					]
				},
				{
					type: 'array',
					additionalItems: false,
					items: [
						{
							type: 'object',
							properties: {
								considerPropertyDescriptor: {
									type: 'boolean'
								},
								includeCommonJSModuleExports: {
									type: 'boolean'
								}
							},
							additionalProperties: false
						}
					]
				}
			]
		},
		messages: {
			matchProperty: 'Function name `{{funcName}}` should match property name `{{name}}`.',
			matchVariable: 'Function name `{{funcName}}` should match variable name `{{name}}`.',
			notMatchProperty: 'Function name `{{funcName}}` should not match property name `{{name}}`.',
			notMatchVariable: 'Function name `{{funcName}}` should not match variable name `{{name}}`.'
		}
	}
}