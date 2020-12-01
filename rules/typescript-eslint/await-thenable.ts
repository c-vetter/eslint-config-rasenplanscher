export const typescriptEslintAwaitThenable = {
	id: '@typescript-eslint/await-thenable',
	key: 'await-thenable',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Disallows awaiting a value that is not a Thenable',
			category: 'Best Practices',
			recommended: 'error',
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/await-thenable.md'
		},
		messages: {
			await: 'Unexpected `await` of a non-Promise (non-“Thenable”) value.'
		},
		schema: [],
		type: 'problem'
	}
}