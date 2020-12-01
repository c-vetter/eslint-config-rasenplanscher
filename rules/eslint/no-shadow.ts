export const noShadow = {
	id: 'no-shadow',
	key: 'no-shadow',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow variable declarations from shadowing variables declared in the outer scope',
			category: 'Variables',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-shadow'
		},
		schema: [
			{
				type: 'object',
				properties: {
					builtinGlobals: {
						type: 'boolean',
						default: false
					},
					hoist: {
						enum: [
							'all',
							'functions',
							'never'
						],
						default: 'functions'
					},
					allow: {
						type: 'array',
						items: {
							type: 'string'
						}
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			noShadow: '‘{{name}}’ is already declared in the upper scope.'
		}
	}
}