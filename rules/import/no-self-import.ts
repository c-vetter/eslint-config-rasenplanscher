export const importNoSelfImport = {
	id: 'import/no-self-import',
	key: 'no-self-import',
	namespace: 'import',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Forbid a module from importing itself',
			recommended: true,
			url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/no-self-import.md'
		},
		schema: []
	}
}