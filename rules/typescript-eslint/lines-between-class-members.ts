export const typescriptEslintLinesBetweenClassMembers = {
	id: '@typescript-eslint/lines-between-class-members',
	key: 'lines-between-class-members',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'Require or disallow an empty line between class members',
			category: 'Stylistic Issues',
			recommended: false,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/lines-between-class-members.md'
		},
		fixable: 'whitespace',
		schema: {
			0: {
				enum: [
					'always',
					'never'
				]
			},
			1: {
				type: 'object',
				properties: {
					exceptAfterSingleLine: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false,
				exceptAfterOverload: {
					type: 'boolean',
					default: true
				}
			}
		},
		messages: {
			never: 'Unexpected blank line between class members.',
			always: 'Expected blank line between class members.'
		}
	}
}