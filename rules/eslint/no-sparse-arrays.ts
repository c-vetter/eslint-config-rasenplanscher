export const noSparseArrays = {
	id: 'no-sparse-arrays',
	key: 'no-sparse-arrays',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow sparse arrays',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-sparse-arrays'
		},
		schema: [],
		messages: {
			unexpectedSparseArray: 'Unexpected comma in middle of array.'
		}
	}
}