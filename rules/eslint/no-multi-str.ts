export const noMultiStr = {
	id: 'no-multi-str',
	key: 'no-multi-str',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow multiline strings',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-multi-str'
		},
		schema: [],
		messages: {
			multilineString: 'Multiline support is limited to browsers supporting ES5 only.'
		}
	}
}