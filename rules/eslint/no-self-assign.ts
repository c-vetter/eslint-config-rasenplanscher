export const noSelfAssign = {
	id: 'no-self-assign',
	key: 'no-self-assign',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow assignments where both sides are exactly the same',
			category: 'Best Practices',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-self-assign'
		},
		schema: [
			{
				type: 'object',
				properties: {
					props: {
						type: 'boolean',
						default: true
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			selfAssignment: '‘{{name}}’ is assigned to itself.'
		}
	}
}