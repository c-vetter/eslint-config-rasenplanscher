export const eolLast = {
	id: 'eol-last',
	key: 'eol-last',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'require or disallow newline at the end of files',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/eol-last'
		},
		fixable: 'whitespace',
		schema: [
			{
				enum: [
					'always',
					'never',
					'unix',
					'windows'
				]
			}
		],
		messages: {
			missing: 'Newline required at end of file but not found.',
			unexpected: 'Newline not allowed at end of file.'
		}
	}
}