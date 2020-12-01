export const typescriptEslintNoExplicitAny = {
	id: '@typescript-eslint/no-explicit-any',
	key: 'no-explicit-any',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallow usage of the `any` type',
			category: 'Best Practices',
			recommended: 'warn',
			suggestion: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-explicit-any.md'
		},
		fixable: 'code',
		messages: {
			unexpectedAny: 'Unexpected any. Specify a different type.',
			suggestUnknown: 'Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.',
			suggestNever: 'Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.'
		},
		schema: [
			{
				type: 'object',
				additionalProperties: false,
				properties: {
					fixToUnknown: {
						type: 'boolean'
					},
					ignoreRestArgs: {
						type: 'boolean'
					}
				}
			}
		]
	}
}