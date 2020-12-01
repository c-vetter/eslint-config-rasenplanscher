export const sortImports = {
	id: 'sort-imports',
	key: 'sort-imports',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce sorted import declarations within modules',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/sort-imports'
		},
		schema: [
			{
				type: 'object',
				properties: {
					ignoreCase: {
						type: 'boolean',
						default: false
					},
					memberSyntaxSortOrder: {
						type: 'array',
						items: {
							enum: [
								'none',
								'all',
								'multiple',
								'single'
							]
						},
						uniqueItems: true,
						minItems: 4,
						maxItems: 4
					},
					ignoreDeclarationSort: {
						type: 'boolean',
						default: false
					},
					ignoreMemberSort: {
						type: 'boolean',
						default: false
					},
					allowSeparatedGroups: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		fixable: 'code',
		messages: {
			sortImportsAlphabetically: 'Imports should be sorted alphabetically.',
			sortMembersAlphabetically: 'Member ‘{{memberName}}’ of the import declaration should be sorted alphabetically.',
			unexpectedSyntaxOrder: 'Expected ‘{{syntaxA}}’ syntax before ‘{{syntaxB}}’ syntax.'
		}
	}
}