export const noSpacedFunc = {
	id: 'no-spaced-func',
	key: 'no-spaced-func',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'disallow spacing between function identifiers and their applications (deprecated)',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-spaced-func'
		},
		deprecated: true,
		replacedBy: [
			'func-call-spacing'
		],
		fixable: 'whitespace',
		schema: [],
		messages: {
			noSpacedFunction: 'Unexpected space between function name and paren.'
		}
	}
}