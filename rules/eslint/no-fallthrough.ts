export const noFallthrough = {
	id: 'no-fallthrough',
	key: 'no-fallthrough',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow fallthrough of `case` statements',
			category: 'Best Practices',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-fallthrough'
		},
		schema: [
			{
				type: 'object',
				properties: {
					commentPattern: {
						type: 'string',
						default: ''
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			case: 'Expected a ‘break’ statement before ‘case’.',
			default: 'Expected a ‘break’ statement before ‘default’.'
		}
	}
}