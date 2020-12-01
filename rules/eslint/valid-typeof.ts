export const validTypeof = {
	id: 'valid-typeof',
	key: 'valid-typeof',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'enforce comparing `typeof` expressions against valid strings',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/valid-typeof'
		},
		schema: [
			{
				type: 'object',
				properties: {
					requireStringLiterals: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			invalidValue: 'Invalid typeof comparison value.',
			notString: 'Typeof comparisons should be to string literals.'
		}
	}
}