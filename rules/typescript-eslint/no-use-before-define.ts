export const typescriptEslintNoUseBeforeDefine = {
	id: '@typescript-eslint/no-use-before-define',
	key: 'no-use-before-define',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow the use of variables before they are defined',
			category: 'Variables',
			recommended: false,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-use-before-define.md'
		},
		messages: {
			noUseBeforeDefine: '‘{{name}}’ was used before it was defined.'
		},
		schema: [
			{
				oneOf: [
					{
						enum: [
							'nofunc'
						]
					},
					{
						type: 'object',
						properties: {
							functions: {
								type: 'boolean'
							},
							classes: {
								type: 'boolean'
							},
							enums: {
								type: 'boolean'
							},
							variables: {
								type: 'boolean'
							},
							typedefs: {
								type: 'boolean'
							},
							ignoreTypeReferences: {
								type: 'boolean'
							}
						},
						additionalProperties: false
					}
				]
			}
		]
	}
}