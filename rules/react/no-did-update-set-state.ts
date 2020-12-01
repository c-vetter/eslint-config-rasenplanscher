export const reactNoDidUpdateSetState = {
	id: 'react/no-did-update-set-state',
	key: 'no-did-update-set-state',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Prevent usage of setState in componentDidUpdate',
			category: 'Best Practices',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-did-update-set-state.md'
		},
		schema: [
			{
				enum: [
					'disallow-in-func'
				]
			}
		]
	}
}