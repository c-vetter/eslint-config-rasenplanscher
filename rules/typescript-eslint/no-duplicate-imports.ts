export const typescriptEslintNoDuplicateImports = {
	id: '@typescript-eslint/no-duplicate-imports',
	key: 'no-duplicate-imports',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow duplicate imports',
			category: 'Best Practices',
			recommended: false,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-duplicate-imports.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					includeExports: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			import: '‘{{module}}’ import is duplicated.',
			importAs: '‘{{module}}’ import is duplicated as export.',
			export: '‘{{module}}’ export is duplicated.',
			exportAs: '‘{{module}}’ export is duplicated as import.',
			importType: '{{module}} type import is duplicated',
			importTypeAs: '{{module}} type import is duplicated as type export',
			exportType: '{{module}} type export is duplicated',
			exportTypeAs: '{{module}} type export is duplicated as type import'
		}
	}
}