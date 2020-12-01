export const noLoopFunc = {
	id: 'no-loop-func',
	key: 'no-loop-func',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow function declarations that contain unsafe references inside loop statements',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-loop-func'
		},
		schema: [],
		messages: {
			unsafeRefs: 'Function declared in a loop contains unsafe references to variable(s) {{ varNames }}.'
		}
	}
}