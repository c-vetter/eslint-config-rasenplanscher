export const wrapIife = {
	id: 'wrap-iife',
	key: 'wrap-iife',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'require parentheses around immediate `function` invocations',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/wrap-iife'
		},
		schema: [
			{
				enum: [
					'outside',
					'inside',
					'any'
				]
			},
			{
				type: 'object',
				properties: {
					functionPrototypeMethods: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		fixable: 'code',
		messages: {
			wrapInvocation: 'Wrap an immediate function invocation in parentheses.',
			wrapExpression: 'Wrap only the function expression in parens.',
			moveInvocation: 'Move the invocation into the parens that contain the function.'
		}
	}
}