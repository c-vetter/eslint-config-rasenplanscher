export const reactNoAccessStateInSetstate = {
	id: 'react/no-access-state-in-setstate',
	key: 'no-access-state-in-setstate',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Reports when this.state is accessed within setState',
			category: 'Possible Errors',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-access-state-in-setstate.md'
		}
	}
}