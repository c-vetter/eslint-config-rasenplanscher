export const commaDangle = {
	id: 'comma-dangle',
	key: 'comma-dangle',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'require or disallow trailing commas',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/comma-dangle'
		},
		fixable: 'code',
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
						'ignore',
						'never',
						'only-multiline'
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
								}
							},
							additionalProperties: false
						}
					]
				}
			]
		},
		messages: {
			unexpected: 'Unexpected trailing comma.',
			missing: 'Missing trailing comma.'
		}
	}
}