export const jsdocRequireProperty = {
	id: 'jsdoc/require-property',
	key: 'require-property',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property'
		},
		fixable: 'code',
		type: 'suggestion'
	}
}