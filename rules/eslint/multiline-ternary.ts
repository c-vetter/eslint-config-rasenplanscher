export const multilineTernary = {
	id: 'multiline-ternary',
	key: 'multiline-ternary',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce newlines between operands of ternary expressions',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/multiline-ternary'
		},
		schema: [
			{
				enum: [
					'always',
					'always-multiline',
					'never'
				]
			}
		],
		messages: {
			expectedTestCons: 'Expected newline between test and consequent of ternary expression.',
			expectedConsAlt: 'Expected newline between consequent and alternate of ternary expression.',
			unexpectedTestCons: 'Unexpected newline between test and consequent of ternary expression.',
			unexpectedConsAlt: 'Unexpected newline between consequent and alternate of ternary expression.'
		}
	}
}