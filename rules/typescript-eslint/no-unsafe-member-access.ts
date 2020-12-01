export const typescriptEslintNoUnsafeMemberAccess = {
	id: '@typescript-eslint/no-unsafe-member-access',
	key: 'no-unsafe-member-access',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallows member access on any typed variables',
			category: 'Possible Errors',
			recommended: 'error',
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md'
		},
		messages: {
			unsafeMemberExpression: 'Unsafe member access {{property}} on an any value.',
			unsafeComputedMemberAccess: 'Computed name {{property}} resolves to an any value.'
		},
		schema: []
	}
}