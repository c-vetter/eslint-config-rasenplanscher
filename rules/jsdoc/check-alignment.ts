export const jsdocCheckAlignment = {
	id: 'jsdoc/check-alignment',
	key: 'check-alignment',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Reports invalid alignment of JSDoc block asterisks.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-alignment'
		},
		fixable: 'code',
		type: 'layout'
	}
}