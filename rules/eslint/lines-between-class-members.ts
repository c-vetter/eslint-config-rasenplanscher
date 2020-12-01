export const linesBetweenClassMembers = {
	id: 'lines-between-class-members',
	key: 'lines-between-class-members',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'require or disallow an empty line between class members',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/lines-between-class-members'
		},
		fixable: 'whitespace',
		schema: [
			{
				enum: [
					'always',
					'never'
				]
			},
			{
				type: 'object',
				properties: {
					exceptAfterSingleLine: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			never: 'Unexpected blank line between class members.',
			always: 'Expected blank line between class members.'
		}
	}
}