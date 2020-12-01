export const noFloatingDecimal = {
	id: 'no-floating-decimal',
	key: 'no-floating-decimal',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow leading or trailing decimal points in numeric literals',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-floating-decimal'
		},
		schema: [],
		fixable: 'code',
		messages: {
			leading: 'A leading decimal point can be confused with a dot.',
			trailing: 'A trailing decimal point can be confused with a dot.'
		}
	}
}