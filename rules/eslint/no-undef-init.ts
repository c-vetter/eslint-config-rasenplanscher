export const noUndefInit = {
	id: 'no-undef-init',
	key: 'no-undef-init',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow initializing variables to `undefined`',
			category: 'Variables',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-undef-init'
		},
		schema: [],
		fixable: 'code',
		messages: {
			unnecessaryUndefinedInit: 'It‘s not necessary to initialize ’{{name}}' to undefined.'
		}
	}
}