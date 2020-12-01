export const jsdocRequireReturnsCheck = {
	id: 'jsdoc/require-returns-check',
	key: 'require-returns-check',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Requires a return statement in function body if a `@returns` tag is specified in jsdoc comment.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-check'
		},
		type: 'suggestion'
	}
}