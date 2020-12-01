export const jsdocCheckLineAlignment = {
	id: 'jsdoc/check-line-alignment',
	key: 'check-line-alignment',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Reports invalid alignment of JSDoc block lines.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-line-alignment'
		},
		fixable: 'whitespace',
		schema: [
			{
				enum: [
					'always',
					'never'
				],
				type: 'string'
			}
		],
		type: 'layout'
	}
}