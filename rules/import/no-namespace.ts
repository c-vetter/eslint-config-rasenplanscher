export const importNoNamespace = {
	id: 'import/no-namespace',
	key: 'no-namespace',
	namespace: 'import',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/no-namespace.md'
		},
		fixable: 'code',
		schema: []
	}
}