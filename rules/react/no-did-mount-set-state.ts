export const reactNoDidMountSetState = {
	id: 'react/no-did-mount-set-state',
	key: 'no-did-mount-set-state',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Prevent usage of setState in componentDidMount',
			category: 'Best Practices',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-did-mount-set-state.md'
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