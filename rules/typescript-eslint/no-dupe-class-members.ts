export const typescriptEslintNoDupeClassMembers = {
	id: '@typescript-eslint/no-dupe-class-members',
	key: 'no-dupe-class-members',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow duplicate class members',
			category: 'Possible Errors',
			recommended: false,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-dupe-class-members.md'
		},
		schema: [],
		messages: {
			unexpected: 'Duplicate name ‘{{name}}’.'
		}
	}
}