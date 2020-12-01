export const typescriptEslintNoUnsafeCall = {
	id: '@typescript-eslint/no-unsafe-call',
	key: 'no-unsafe-call',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallows calling an any type value',
			category: 'Possible Errors',
			recommended: 'error',
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-unsafe-call.md'
		},
		messages: {
			unsafeCall: 'Unsafe call of an any typed value.',
			unsafeNew: 'Unsafe construction of an any type value.',
			unsafeTemplateTag: 'Unsafe any typed template tag.'
		},
		schema: []
	}
}