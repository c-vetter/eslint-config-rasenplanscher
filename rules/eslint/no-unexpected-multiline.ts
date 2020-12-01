export const noUnexpectedMultiline = {
	id: 'no-unexpected-multiline',
	key: 'no-unexpected-multiline',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow confusing multiline expressions',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-unexpected-multiline'
		},
		schema: [],
		messages: {
			function: 'Unexpected newline between function and ( of function call.',
			property: 'Unexpected newline between object and [ of property access.',
			taggedTemplate: 'Unexpected newline between template tag and template literal.',
			division: 'Unexpected newline between numerator and division operator.'
		}
	}
}