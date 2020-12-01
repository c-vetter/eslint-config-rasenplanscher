export const importFirst = {
	id: 'import/first',
	key: 'first',
	namespace: 'import',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/first.md'
		},
		fixable: 'code',
		schema: [
			{
				type: 'string',
				enum: [
					'absolute-first',
					'disable-absolute-first'
				]
			}
		]
	}
}