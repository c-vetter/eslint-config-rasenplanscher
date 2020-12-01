export const unicodeBom = {
	id: 'unicode-bom',
	key: 'unicode-bom',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'require or disallow Unicode byte order mark (BOM)',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/unicode-bom'
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
			expected: 'Expected Unicode BOM (Byte Order Mark).',
			unexpected: 'Unexpected Unicode BOM (Byte Order Mark).'
		}
	}
}