export const noLoneBlocks = {
	id: 'no-lone-blocks',
	key: 'no-lone-blocks',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow unnecessary nested blocks',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-lone-blocks'
		},
		schema: [],
		messages: {
			redundantBlock: 'Block is redundant.',
			redundantNestedBlock: 'Nested block is redundant.'
		}
	}
}