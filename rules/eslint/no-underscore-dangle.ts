export const noUnderscoreDangle = {
	id: 'no-underscore-dangle',
	key: 'no-underscore-dangle',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow dangling underscores in identifiers',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-underscore-dangle'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allow: {
						type: 'array',
						items: {
							type: 'string'
						}
					},
					allowAfterThis: {
						type: 'boolean',
						default: false
					},
					allowAfterSuper: {
						type: 'boolean',
						default: false
					},
					allowAfterThisConstructor: {
						type: 'boolean',
						default: false
					},
					enforceInMethodNames: {
						type: 'boolean',
						default: false
					},
					allowFunctionParams: {
						type: 'boolean',
						default: true
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpectedUnderscore: 'Unexpected dangling ‘_’ in ‘{{identifier}}’.'
		}
	}
}