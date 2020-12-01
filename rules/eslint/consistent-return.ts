export const consistentReturn = {
	id: 'consistent-return',
	key: 'consistent-return',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require `return` statements to either always or never specify values',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/consistent-return'
		},
		schema: [
			{
				type: 'object',
				properties: {
					treatUndefinedAsUnspecified: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			missingReturn: 'Expected to return a value at the end of {{name}}.',
			missingReturnValue: '{{name}} expected a return value.',
			unexpectedReturnValue: '{{name}} expected no return value.'
		}
	}
}