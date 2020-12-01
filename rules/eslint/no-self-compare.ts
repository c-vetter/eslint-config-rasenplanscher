export const noSelfCompare = {
	id: 'no-self-compare',
	key: 'no-self-compare',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow comparisons where both sides are exactly the same',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-self-compare'
		},
		schema: [],
		messages: {
			comparingToSelf: 'Comparing to itself is potentially pointless.'
		}
	}
}