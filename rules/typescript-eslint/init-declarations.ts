export const typescriptEslintInitDeclarations = {
	id: '@typescript-eslint/init-declarations',
	key: 'init-declarations',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require or disallow initialization in variable declarations',
			category: 'Variables',
			recommended: false,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/init-declarations.md'
		},
		schema: {
			anyOf: [
				{
					type: 'array',
					items: [
						{
							enum: [
								'always'
							]
						}
					],
					minItems: 0,
					maxItems: 1
				},
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
								ignoreForLoopInit: {
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
			initialized: 'Variable ‘{{idName}}’ should be initialized on declaration.',
			notInitialized: 'Variable ‘{{idName}}’ should not be initialized on declaration.'
		}
	}
}