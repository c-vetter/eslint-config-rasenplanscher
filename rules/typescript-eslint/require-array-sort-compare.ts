export const typescriptEslintRequireArraySortCompare = {
	id: '@typescript-eslint/require-array-sort-compare',
	key: 'require-array-sort-compare',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Requires `Array#sort` calls to always provide a `compareFunction`',
			category: 'Best Practices',
			recommended: false,
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/require-array-sort-compare.md'
		},
		messages: {
			requireCompare: 'Require ‘compare’ argument.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					ignoreStringArrays: {
						type: 'boolean'
					}
				}
			}
		]
	}
}