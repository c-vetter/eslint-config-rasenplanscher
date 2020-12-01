export const noAwaitInLoop = {
	id: 'no-await-in-loop',
	key: 'no-await-in-loop',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow `await` inside of loops',
			category: 'Possible Errors',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-await-in-loop'
		},
		schema: [],
		messages: {
			unexpectedAwait: 'Unexpected `await` inside a loop.'
		}
	}
}