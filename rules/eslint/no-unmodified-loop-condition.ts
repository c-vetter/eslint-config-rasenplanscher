export const noUnmodifiedLoopCondition = {
	id: 'no-unmodified-loop-condition',
	key: 'no-unmodified-loop-condition',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow unmodified loop conditions',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-unmodified-loop-condition'
		},
		schema: [],
		messages: {
			loopConditionNotModified: '‘{{name}}’ is not modified in this loop.'
		}
	}
}