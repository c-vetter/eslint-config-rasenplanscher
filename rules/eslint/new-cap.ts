export const newCap = {
	id: 'new-cap',
	key: 'new-cap',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require constructor names to begin with a capital letter',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/new-cap'
		},
		schema: [
			{
				type: 'object',
				properties: {
					newIsCap: {
						type: 'boolean',
						default: true
					},
					capIsNew: {
						type: 'boolean',
						default: true
					},
					newIsCapExceptions: {
						type: 'array',
						items: {
							type: 'string'
						}
					},
					newIsCapExceptionPattern: {
						type: 'string'
					},
					capIsNewExceptions: {
						type: 'array',
						items: {
							type: 'string'
						}
					},
					capIsNewExceptionPattern: {
						type: 'string'
					},
					properties: {
						type: 'boolean',
						default: true
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			upper: 'A function with a name starting with an uppercase letter should only be used as a constructor.',
			lower: 'A constructor name should not start with a lowercase letter.'
		}
	}
}