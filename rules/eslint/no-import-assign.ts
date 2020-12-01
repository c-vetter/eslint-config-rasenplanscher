export const noImportAssign = {
	id: 'no-import-assign',
	key: 'no-import-assign',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow assigning to imported bindings',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-import-assign'
		},
		schema: [],
		messages: {
			readonly: '‘{{name}}’ is read-only.',
			readonlyMember: 'The members of ‘{{name}}’ are read-only.'
		}
	}
}