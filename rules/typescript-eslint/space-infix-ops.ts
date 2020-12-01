export const typescriptEslintSpaceInfixOps = {
	id: '@typescript-eslint/space-infix-ops',
	key: 'space-infix-ops',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'This rule is aimed at ensuring there are spaces around infix operators.',
			category: 'Stylistic Issues',
			recommended: false,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/space-infix-ops.md'
		},
		fixable: 'whitespace',
		schema: [
			{
				type: 'object',
				properties: {
					int32Hint: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			missingSpace: 'Operator ‘{{operator}}’ must be spaced.'
		}
	}
}