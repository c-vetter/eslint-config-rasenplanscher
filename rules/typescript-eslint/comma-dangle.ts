export const typescriptEslintCommaDangle = {
	id: '@typescript-eslint/comma-dangle',
	key: 'comma-dangle',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'Require or disallow trailing comma',
			category: 'Stylistic Issues',
			recommended: false,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/comma-dangle.md'
		},
		schema: {
			definitions: {
				value: {
					enum: [
						'always-multiline',
						'always',
						'never',
						'only-multiline'
					]
				},
				valueWithIgnore: {
					enum: [
						'always-multiline',
						'always',
						'never',
						'only-multiline',
						'ignore'
					]
				}
			},
			type: 'array',
			items: [
				{
					oneOf: [
						{
							'$ref': '#/definitions/value'
						},
						{
							type: 'object',
							properties: {
								arrays: {
									'$ref': '#/definitions/valueWithIgnore'
								},
								objects: {
									'$ref': '#/definitions/valueWithIgnore'
								},
								imports: {
									'$ref': '#/definitions/valueWithIgnore'
								},
								exports: {
									'$ref': '#/definitions/valueWithIgnore'
								},
								functions: {
									'$ref': '#/definitions/valueWithIgnore'
								},
								enums: {
									'$ref': '#/definitions/valueWithIgnore'
								},
								generics: {
									'$ref': '#/definitions/valueWithIgnore'
								},
								tuples: {
									'$ref': '#/definitions/valueWithIgnore'
								}
							},
							additionalProperties: false
						}
					]
				}
			]
		},
		fixable: 'code',
		messages: {
			unexpected: 'Unexpected trailing comma.',
			missing: 'Missing trailing comma.'
		}
	}
}