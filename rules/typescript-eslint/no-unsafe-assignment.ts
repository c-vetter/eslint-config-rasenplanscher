export const typescriptEslintNoUnsafeAssignment = {
	id: '@typescript-eslint/no-unsafe-assignment',
	key: 'no-unsafe-assignment',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallows assigning any to variables and properties',
			category: 'Possible Errors',
			recommended: 'error',
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md'
		},
		messages: {
			anyAssignment: 'Unsafe assignment of an any value.',
			unsafeArrayPattern: 'Unsafe array destructuring of an any array value.',
			unsafeArrayPatternFromTuple: 'Unsafe array destructuring of a tuple element with an any value.',
			unsafeAssignment: 'Unsafe assignment of type {{sender}} to a variable of type {{receiver}}.',
			unsafeArraySpread: 'Unsafe spread of an any value in an array.'
		},
		schema: []
	}
}