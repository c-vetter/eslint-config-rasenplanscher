export const typescriptEslintNoMagicNumbers = {
	id: '@typescript-eslint/no-magic-numbers',
	key: 'no-magic-numbers',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallow magic numbers',
			category: 'Best Practices',
			recommended: false,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-magic-numbers.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					detectObjects: {
						type: 'boolean',
						default: false
					},
					enforceConst: {
						type: 'boolean',
						default: false
					},
					ignore: {
						type: 'array',
						items: {
							anyOf: [
								{
									type: 'number'
								},
								{
									type: 'string',
									pattern: '^[+-]?(?:0|[1-9][0-9]*)n$'
								}
							]
						},
						uniqueItems: true
					},
					ignoreArrayIndexes: {
						type: 'boolean',
						default: false
					},
					ignoreDefaultValues: {
						type: 'boolean',
						default: false
					},
					ignoreNumericLiteralTypes: {
						type: 'boolean'
					},
					ignoreEnums: {
						type: 'boolean'
					},
					ignoreReadonlyClassProperties: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			useConst: 'Number constants declarations must use ‘const’.',
			noMagic: 'No magic number: {{raw}}.'
		}
	}
}