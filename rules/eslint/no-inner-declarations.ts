export const noInnerDeclarations = {
	id: 'no-inner-declarations',
	key: 'no-inner-declarations',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow variable or `function` declarations in nested blocks',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-inner-declarations'
		},
		schema: [
			{
				enum: [
					'functions',
					'both'
				]
			}
		],
		messages: {
			moveDeclToRoot: 'Move {{type}} declaration to {{body}} root.'
		}
	}
}