export const typescriptEslintNoImpliedEval = {
	id: '@typescript-eslint/no-implied-eval',
	key: 'no-implied-eval',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Disallow the use of `eval()`-like methods',
			category: 'Best Practices',
			recommended: 'error',
			extendsBaseRule: true,
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-implied-eval.md'
		},
		messages: {
			noImpliedEvalError: 'Implied eval. Consider passing a function.',
			noFunctionConstructor: 'Implied eval. Do not use the Function constructor to create functions.'
		},
		schema: [],
		type: 'suggestion'
	}
}