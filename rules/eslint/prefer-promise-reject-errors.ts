export const preferPromiseRejectErrors = {
	id: 'prefer-promise-reject-errors',
	key: 'prefer-promise-reject-errors',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require using Error objects as Promise rejection reasons',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/prefer-promise-reject-errors'
		},
		fixable: null,
		schema: [
			{
				type: 'object',
				properties: {
					allowEmptyReject: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			rejectAnError: 'Expected the Promise rejection reason to be an Error.'
		}
	}
}