export const typescriptEslintTripleSlashReference = {
	id: '@typescript-eslint/triple-slash-reference',
	key: 'triple-slash-reference',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Sets preference level for triple slash directives versus ES6-style import declarations',
			category: 'Best Practices',
			recommended: 'error',
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/triple-slash-reference.md'
		},
		messages: {
			tripleSlashReference: 'Do not use a triple slash reference for {{module}}, use `import` style instead.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					lib: {
						enum: [
							'always',
							'never'
						]
					},
					path: {
						enum: [
							'always',
							'never'
						]
					},
					types: {
						enum: [
							'always',
							'never',
							'prefer-import'
						]
					}
				},
				additionalProperties: false
			}
		]
	}
}