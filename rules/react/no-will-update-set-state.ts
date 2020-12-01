export const reactNoWillUpdateSetState = {
	id: 'react/no-will-update-set-state',
	key: 'no-will-update-set-state',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Prevent usage of setState in componentWillUpdate',
			category: 'Best Practices',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-will-update-set-state.md'
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