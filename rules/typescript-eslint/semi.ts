export const typescriptEslintSemi = {
	id: '@typescript-eslint/semi',
	key: 'semi',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'Require or disallow semicolons instead of ASI',
			category: 'Stylistic Issues',
			recommended: false,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/semi.md'
		},
		fixable: 'code',
		schema: {
			anyOf: [
				{
					type: 'array',
					items: [
						{
							enum: [
								'never'
							]
						},
						{
							type: 'object',
							properties: {
								beforeStatementContinuationChars: {
									enum: [
										'always',
										'any',
										'never'
									]
								}
							},
							additionalProperties: false
						}
					],
					minItems: 0,
					maxItems: 2
				},
				{
					type: 'array',
					items: [
						{
							enum: [
								'always'
							]
						},
						{
							type: 'object',
							properties: {
								omitLastInOneLineBlock: {
									type: 'boolean'
								}
							},
							additionalProperties: false
						}
					],
					minItems: 0,
					maxItems: 2
				}
			]
		},
		messages: {
			missingSemi: 'Missing semicolon.',
			extraSemi: 'Extra semicolon.'
		}
	}
}