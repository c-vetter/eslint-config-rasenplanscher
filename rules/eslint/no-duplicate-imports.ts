export const noDuplicateImports = {
	id: 'no-duplicate-imports',
	key: 'no-duplicate-imports',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow duplicate module imports',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-duplicate-imports'
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
			exportAs: '‘{{module}}’ export is duplicated as import.'
		}
	}
}