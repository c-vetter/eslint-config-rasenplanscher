export const templateTagSpacing = {
	id: 'template-tag-spacing',
	key: 'template-tag-spacing',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'require or disallow spacing between template tags and their literals',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/template-tag-spacing'
		},
		fixable: 'whitespace',
		schema: [
			{
				enum: [
					'always',
					'never'
				]
			}
		],
		messages: {
			unexpected: 'Unexpected space between template tag and template literal.',
			missing: 'Missing space between template tag and template literal.'
		}
	}
}