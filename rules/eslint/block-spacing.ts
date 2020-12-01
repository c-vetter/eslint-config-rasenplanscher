export const blockSpacing = {
	id: 'block-spacing',
	key: 'block-spacing',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'disallow or enforce spaces inside of blocks after opening block and before closing block',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/block-spacing'
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
			missing: 'Requires a space {{location}} ‘{{token}}’.',
			extra: 'Unexpected space(s) {{location}} ‘{{token}}’.'
		}
	}
}