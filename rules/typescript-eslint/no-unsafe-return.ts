export const typescriptEslintNoUnsafeReturn = {
	id: '@typescript-eslint/no-unsafe-return',
	key: 'no-unsafe-return',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallows returning any from a function',
			category: 'Possible Errors',
			recommended: 'error',
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-unsafe-return.md'
		},
		messages: {
			unsafeReturn: 'Unsafe return of an {{type}} typed value',
			unsafeReturnAssignment: 'Unsafe return of type {{sender}} from function with return type {{receiver}}.'
		},
		schema: []
	}
}