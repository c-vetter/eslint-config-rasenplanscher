export const jsdocNewlineAfterDescription = {
	id: 'jsdoc/newline-after-description',
	key: 'newline-after-description',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Enforces a consistent padding of the block description.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-newline-after-description'
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