export const typescriptEslintUnifiedSignatures = {
	id: '@typescript-eslint/unified-signatures',
	key: 'unified-signatures',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter',
			category: 'Variables',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/unified-signatures.md'
		},
		type: 'suggestion',
		messages: {
			omittingRestParameter: '{{failureStringStart}} with a rest parameter.',
			omittingSingleParameter: '{{failureStringStart}} with an optional parameter.',
			singleParameterDifference: '{{failureStringStart}} taking `{{type1}} | {{type2}}`.'
		},
		schema: []
	}
}