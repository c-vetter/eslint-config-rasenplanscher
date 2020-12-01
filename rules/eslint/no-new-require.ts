export const noNewRequire = {
	id: 'no-new-require',
	key: 'no-new-require',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		deprecated: true,
		replacedBy: [],
		type: 'suggestion',
		docs: {
			description: 'disallow `new` operators with calls to `require`',
			category: 'Node.js and CommonJS',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-new-require'
		},
		schema: [],
		messages: {
			noNewRequire: 'Unexpected use of new with require.'
		}
	}
}