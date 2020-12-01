export const typescriptEslintCommaSpacing = {
	id: '@typescript-eslint/comma-spacing',
	key: 'comma-spacing',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Enforces consistent spacing before and after commas',
			category: 'Stylistic Issues',
			recommended: false,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/comma-spacing.md'
		},
		fixable: 'whitespace',
		schema: [
			{
				type: 'object',
				properties: {
					before: {
						type: 'boolean',
						default: false
					},
					after: {
						type: 'boolean',
						default: true
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpected: 'There should be no space {{loc}} ‘,’.',
			missing: 'A space is required {{loc}} ‘,’.'
		}
	}
}