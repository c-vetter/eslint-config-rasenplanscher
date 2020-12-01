export const jsdocCheckAccess = {
	id: 'jsdoc/check-access',
	key: 'check-access',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Checks that `@access` tags have a valid value.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-access'
		},
		type: 'suggestion'
	}
}