export const noUnreachableLoop = {
	id: 'no-unreachable-loop',
	key: 'no-unreachable-loop',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow loops with a body that allows only one iteration',
			category: 'Possible Errors',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-unreachable-loop'
		},
		schema: [
			{
				type: 'object',
				properties: {
					ignore: {
						type: 'array',
						items: {
							enum: [
								'WhileStatement',
								'DoWhileStatement',
								'ForStatement',
								'ForInStatement',
								'ForOfStatement'
							]
						},
						uniqueItems: true
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			invalid: 'Invalid loop. Its body allows only one iteration.'
		}
	}
}