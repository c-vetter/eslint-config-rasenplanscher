export const noShadowRestrictedNames = {
	id: 'no-shadow-restricted-names',
	key: 'no-shadow-restricted-names',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow identifiers from shadowing restricted names',
			category: 'Variables',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-shadow-restricted-names'
		},
		schema: [],
		messages: {
			shadowingRestrictedName: 'Shadowing of global property ‘{{name}}’.'
		}
	}
}