export const reactNoThisInSfc = {
	id: 'react/no-this-in-sfc',
	key: 'no-this-in-sfc',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Report “this” being used in stateless components',
			category: 'Possible Errors',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-this-in-sfc.md'
		},
		schema: []
	}
}