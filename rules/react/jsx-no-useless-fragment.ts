export const reactJsxNoUselessFragment = {
	id: 'react/jsx-no-useless-fragment',
	key: 'jsx-no-useless-fragment',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		fixable: 'code',
		docs: {
			description: 'Disallow unnecessary fragments',
			category: 'Possible Errors',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-useless-fragment.md'
		},
		messages: {
			NeedsMoreChidren: 'Fragments should contain more than one child - otherwise, there‘s no need for a Fragment at all.',
			ChildOfHtmlElement: 'Passing a fragment to an HTML element is useless.'
		}
	}
}