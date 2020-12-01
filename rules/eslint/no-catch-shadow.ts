export const noCatchShadow = {
	id: 'no-catch-shadow',
	key: 'no-catch-shadow',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow `catch` clause parameters from shadowing variables in the outer scope',
			category: 'Variables',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-catch-shadow'
		},
		replacedBy: [
			'no-shadow'
		],
		deprecated: true,
		schema: [],
		messages: {
			mutable: 'Value of ‘{{name}}’ may be overwritten in IE 8 and earlier.'
		}
	}
}