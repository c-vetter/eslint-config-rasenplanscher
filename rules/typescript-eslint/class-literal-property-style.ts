export const typescriptEslintClassLiteralPropertyStyle = {
	id: '@typescript-eslint/class-literal-property-style',
	key: 'class-literal-property-style',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Ensures that literals on classes are exposed in a consistent style',
			category: 'Best Practices',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/class-literal-property-style.md'
		},
		fixable: 'code',
		messages: {
			preferFieldStyle: 'Literals should be exposed using readonly fields.',
			preferGetterStyle: 'Literals should be exposed using getters.'
		},
		schema: [
			{
				enum: [
					'fields',
					'getters'
				]
			}
		]
	}
}