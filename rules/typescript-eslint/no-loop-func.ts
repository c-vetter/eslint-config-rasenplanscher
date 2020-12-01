export const typescriptEslintNoLoopFunc = {
	id: '@typescript-eslint/no-loop-func',
	key: 'no-loop-func',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallow function declarations that contain unsafe references inside loop statements',
			category: 'Best Practices',
			recommended: false,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-loop-func.md'
		},
		schema: [],
		messages: {
			unsafeRefs: 'Function declared in a loop contains unsafe references to variable(s) {{ varNames }}.'
		}
	}
}