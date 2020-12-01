export const unusedImportsNoUnusedImportsTs = {
	id: 'unused-imports/no-unused-imports-ts',
	key: 'no-unused-imports-ts',
	namespace: 'unused-imports',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow unused variables',
			category: 'Variables',
			recommended: 'warn',
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-unused-vars.md'
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