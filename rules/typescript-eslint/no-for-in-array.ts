export const typescriptEslintNoForInArray = {
	id: '@typescript-eslint/no-for-in-array',
	key: 'no-for-in-array',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Disallow iterating over an array with a for-in loop',
			category: 'Best Practices',
			recommended: 'error',
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-for-in-array.md'
		},
		messages: {
			forInViolation: 'For-in loops over arrays are forbidden. Use for-of or array.forEach instead.'
		},
		schema: [],
		type: 'problem'
	}
}