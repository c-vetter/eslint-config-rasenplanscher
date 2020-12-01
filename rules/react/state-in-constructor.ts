export const reactStateInConstructor = {
	id: 'react/state-in-constructor',
	key: 'state-in-constructor',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'State initialization in an ES6 class component should be in a constructor',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/state-in-constructor.md'
		},
		schema: [
			{
				enum: [
					'always',
					'never'
				]
			}
		]
	}
}