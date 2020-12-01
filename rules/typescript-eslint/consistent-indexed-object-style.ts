export const typescriptEslintConsistentIndexedObjectStyle = {
	id: '@typescript-eslint/consistent-indexed-object-style',
	key: 'consistent-indexed-object-style',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Enforce or disallow the use of the record type',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md'
		},
		messages: {
			preferRecord: 'A record is preferred over an index signature',
			preferIndexSignature: 'An index signature is preferred over a record.'
		},
		fixable: 'code',
		schema: [
			{
				enum: [
					'record',
					'index-signature'
				]
			}
		]
	}
}