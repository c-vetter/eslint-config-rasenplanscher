export const spaceInfixOps = {
	id: 'space-infix-ops',
	key: 'space-infix-ops',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'require spacing around infix operators',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/space-infix-ops'
		},
		fixable: 'whitespace',
		schema: [
			{
				type: 'object',
				properties: {
					int32Hint: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			missingSpace: 'Operator ‘{{operator}}’ must be spaced.'
		}
	}
}