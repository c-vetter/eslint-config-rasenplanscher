export const jsdocCheckSyntax = {
	id: 'jsdoc/check-syntax',
	key: 'check-syntax',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Reports against syntax not valid for the mode (e.g., Google Closure Compiler in non-Closure mode).',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-syntax'
		},
		type: 'suggestion'
	}
}