export const noRegexSpaces = {
	id: 'no-regex-spaces',
	key: 'no-regex-spaces',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow multiple spaces in regular expressions',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-regex-spaces'
		},
		schema: [],
		fixable: 'code',
		messages: {
			multipleSpaces: 'Spaces are hard to count. Use {{{length}}}.'
		}
	}
}