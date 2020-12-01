export const typescriptEslintPreferFunctionType = {
	id: '@typescript-eslint/prefer-function-type',
	key: 'prefer-function-type',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Use function types instead of interfaces with call signatures',
			category: 'Best Practices',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/prefer-function-type.md'
		},
		fixable: 'code',
		messages: {
			functionTypeOverCallableType: '{{ literalOrInterface }} only has a call signature, you should use a function type instead.',
			unexpectedThisOnFunctionOnlyInterface: '`this` refers to the function type ‘{{ interfaceName }}’, did you intend to use a generic `this` parameter like `<Self>(this: Self, ...) => Self` instead?'
		},
		schema: [],
		type: 'suggestion'
	}
}