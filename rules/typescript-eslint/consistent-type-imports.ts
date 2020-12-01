export const typescriptEslintConsistentTypeImports = {
	id: '@typescript-eslint/consistent-type-imports',
	key: 'consistent-type-imports',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Enforces consistent usage of type imports',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/consistent-type-imports.md'
		},
		messages: {
			typeOverValue: 'All imports in the declaration are only used as types. Use `import type`',
			someImportsAreOnlyTypes: 'Imports {{typeImports}} are only used as types',
			aImportIsOnlyTypes: 'Import {{typeImports}} is only used as types',
			valueOverType: 'Use an `import` instead of an `import type`.',
			noImportTypeAnnotations: '`import()` type annotations are forbidden.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					prefer: {
						enum: [
							'type-imports',
							'no-type-imports'
						]
					},
					disallowTypeAnnotations: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		],
		fixable: 'code'
	}
}