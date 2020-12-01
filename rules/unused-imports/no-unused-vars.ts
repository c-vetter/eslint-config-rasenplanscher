export const unusedImportsNoUnusedVars = {
	id: 'unused-imports/no-unused-vars',
	key: 'no-unused-vars',
	namespace: 'unused-imports',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow unused variables',
			category: 'Variables',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-unused-vars'
		},
		schema: [
			{
				oneOf: [
					{
						enum: [
							'all',
							'local'
						]
					},
					{
						type: 'object',
						properties: {
							vars: {
								enum: [
									'all',
									'local'
								]
							},
							varsIgnorePattern: {
								type: 'string'
							},
							args: {
								enum: [
									'all',
									'after-used',
									'none'
								]
							},
							ignoreRestSiblings: {
								type: 'boolean'
							},
							argsIgnorePattern: {
								type: 'string'
							},
							caughtErrors: {
								enum: [
									'all',
									'none'
								]
							},
							caughtErrorsIgnorePattern: {
								type: 'string'
							}
						},
						additionalProperties: false
					}
				]
			}
		],
		messages: {
			unusedVar: '‘{{varName}}’ is {{action}} but never used{{additional}}.'
		},
		fixable: 'code'
	}
}