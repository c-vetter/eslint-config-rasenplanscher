export const typescriptEslintDotNotation = {
	id: '@typescript-eslint/dot-notation',
	key: 'dot-notation',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce dot notation whenever possible',
			category: 'Best Practices',
			recommended: false,
			extendsBaseRule: true,
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/dot-notation.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowKeywords: {
						type: 'boolean',
						default: true
					},
					allowPattern: {
						type: 'string',
						default: ''
					},
					allowPrivateClassPropertyAccess: {
						type: 'boolean',
						default: false
					},
					allowProtectedClassPropertyAccess: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		fixable: 'code',
		messages: {
			useDot: '[{{key}}] is better written in dot notation.',
			useBrackets: '.{{key}} is a syntax error.'
		}
	}
}