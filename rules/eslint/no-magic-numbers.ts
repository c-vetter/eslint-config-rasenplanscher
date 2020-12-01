export const noMagicNumbers = {
	id: 'no-magic-numbers',
	key: 'no-magic-numbers',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow magic numbers',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-magic-numbers'
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