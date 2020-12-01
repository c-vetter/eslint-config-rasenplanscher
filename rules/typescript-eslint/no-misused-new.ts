export const typescriptEslintNoMisusedNew = {
	id: '@typescript-eslint/no-misused-new',
	key: 'no-misused-new',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Enforce valid definition of `new` and `constructor`',
			category: 'Best Practices',
			recommended: 'error',
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-misused-new.md'
		},
		schema: [],
		messages: {
			errorMessageInterface: 'Interfaces cannot be constructed, only classes.',
			errorMessageClass: 'Class cannot have method named `new`.'
		}
	}
}