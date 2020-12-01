export const validJsdoc = {
	id: 'valid-jsdoc',
	key: 'valid-jsdoc',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce valid JSDoc comments',
			category: 'Possible Errors',
			recommended: false,
			url: 'https://eslint.org/docs/rules/valid-jsdoc'
		},
		schema: [
			{
				type: 'object',
				properties: {
					prefer: {
						type: 'object',
						additionalProperties: {
							type: 'string'
						}
					},
					preferType: {
						type: 'object',
						additionalProperties: {
							type: 'string'
						}
					},
					requireReturn: {
						type: 'boolean',
						default: true
					},
					requireParamDescription: {
						type: 'boolean',
						default: true
					},
					requireReturnDescription: {
						type: 'boolean',
						default: true
					},
					matchDescription: {
						type: 'string'
					},
					requireReturnType: {
						type: 'boolean',
						default: true
					},
					requireParamType: {
						type: 'boolean',
						default: true
					}
				},
				additionalProperties: false
			}
		],
		fixable: 'code',
		messages: {
			unexpectedTag: 'Unexpected @{{title}} tag; function has no return statement.',
			expected: 'Expected JSDoc for ‘{{name}}’ but found ‘{{jsdocName}}’.',
			use: 'Use @{{name}} instead.',
			useType: 'Use ‘{{expectedTypeName}}’ instead of ‘{{currentTypeName}}’.',
			syntaxError: 'JSDoc syntax error.',
			missingBrace: 'JSDoc type missing brace.',
			missingParamDesc: 'Missing JSDoc parameter description for ‘{{name}}’.',
			missingParamType: 'Missing JSDoc parameter type for ‘{{name}}’.',
			missingReturnType: 'Missing JSDoc return type.',
			missingReturnDesc: 'Missing JSDoc return description.',
			missingReturn: 'Missing JSDoc @{{returns}} for function.',
			missingParam: 'Missing JSDoc for parameter ‘{{name}}’.',
			duplicateParam: 'Duplicate JSDoc parameter ‘{{name}}’.',
			unsatisfiedDesc: 'JSDoc description does not satisfy the regex pattern.'
		},
		deprecated: true,
		replacedBy: []
	}
}