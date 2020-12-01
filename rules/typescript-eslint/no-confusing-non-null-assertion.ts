export const typescriptEslintNoConfusingNonNullAssertion = {
	id: '@typescript-eslint/no-confusing-non-null-assertion',
	key: 'no-confusing-non-null-assertion',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow non-null assertion in locations that may be confusing',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md'
		},
		fixable: 'code',
		messages: {
			confusingEqual: 'Confusing combinations of non-null assertion and equal test like “a! == b”, which looks very similar to not equal “a !== b”',
			confusingAssign: 'Confusing combinations of non-null assertion and equal test like “a! = b”, which looks very similar to not equal “a != b”',
			notNeedInEqualTest: 'Unnecessary non-null assertion (!) in equal test',
			notNeedInAssign: 'Unnecessary non-null assertion (!) in assignment left hand',
			wrapUpLeft: 'Wrap up left hand to avoid putting non-null assertion “!” and “=” together'
		},
		schema: []
	}
}