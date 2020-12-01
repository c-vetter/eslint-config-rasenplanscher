export const initDeclarations = {
	id: 'init-declarations',
	key: 'init-declarations',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require or disallow initialization in variable declarations',
			category: 'Variables',
			recommended: false,
			url: 'https://eslint.org/docs/rules/init-declarations'
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