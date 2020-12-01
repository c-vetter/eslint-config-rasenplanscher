export const noPathConcat = {
	id: 'no-path-concat',
	key: 'no-path-concat',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		deprecated: true,
		replacedBy: [],
		type: 'suggestion',
		docs: {
			description: 'disallow string concatenation with `__dirname` and `__filename`',
			category: 'Node.js and CommonJS',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-path-concat'
		},
		schema: [],
		messages: {
			usePathFunctions: 'Use path.join() or path.resolve() instead of + to create paths.'
		}
	}
}