export const globalRequire = {
	id: 'global-require',
	key: 'global-require',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		deprecated: true,
		replacedBy: [],
		type: 'suggestion',
		docs: {
			description: 'require `require()` calls to be placed at top-level module scope',
			category: 'Node.js and CommonJS',
			recommended: false,
			url: 'https://eslint.org/docs/rules/global-require'
		},
		schema: [],
		messages: {
			unexpected: 'Unexpected require().'
		}
	}
}