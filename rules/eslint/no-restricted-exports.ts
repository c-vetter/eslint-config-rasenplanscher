export const noRestrictedExports = {
	id: 'no-restricted-exports',
	key: 'no-restricted-exports',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow specified names in exports',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-restricted-exports'
		},
		schema: [
			{
				type: 'object',
				properties: {
					restrictedNamedExports: {
						type: 'array',
						items: {
							type: 'string'
						},
						uniqueItems: true
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			restrictedNamed: '‘{{name}}’ is restricted from being used as an exported name.'
		}
	}
}