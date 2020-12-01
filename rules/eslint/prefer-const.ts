export const preferConst = {
	id: 'prefer-const',
	key: 'prefer-const',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require `const` declarations for variables that are never reassigned after declared',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/prefer-const'
		},
		fixable: 'code',
		schema: [
			{
				type: 'object',
				properties: {
					destructuring: {
						enum: [
							'any',
							'all'
						],
						default: 'any'
					},
					ignoreReadBeforeAssign: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			useConst: '‘{{name}}’ is never reassigned. Use ‘const’ instead.'
		}
	}
}