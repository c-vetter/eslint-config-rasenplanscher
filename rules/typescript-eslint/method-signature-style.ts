export const typescriptEslintMethodSignatureStyle = {
	id: '@typescript-eslint/method-signature-style',
	key: 'method-signature-style',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Enforces using a particular method signature syntax.',
			category: 'Best Practices',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/method-signature-style.md'
		},
		fixable: 'code',
		messages: {
			errorMethod: 'Shorthand method signature is forbidden. Use a function property instead.',
			errorProperty: 'Function property signature is forbidden. Use a method shorthand instead.'
		},
		schema: [
			{
				enum: [
					'property',
					'method'
				]
			}
		]
	}
}