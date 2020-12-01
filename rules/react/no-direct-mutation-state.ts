export const reactNoDirectMutationState = {
	id: 'react/no-direct-mutation-state',
	key: 'no-direct-mutation-state',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Prevent direct mutation of this.state',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-direct-mutation-state.md'
		}
	}
}