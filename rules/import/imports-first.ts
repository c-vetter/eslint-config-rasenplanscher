export const importImportsFirst = {
	id: 'import/imports-first',
	key: 'imports-first',
	namespace: 'import',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			url: 'https://github.com/benmosher/eslint-plugin-import/blob/7b25c1cb95ee18acc1531002fd343e1e6031f9ed/docs/rules/imports-first.md'
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
		],
		deprecated: true
	}
}