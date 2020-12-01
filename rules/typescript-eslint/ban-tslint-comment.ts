export const typescriptEslintBanTslintComment = {
	id: '@typescript-eslint/ban-tslint-comment',
	key: 'ban-tslint-comment',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Bans `// tslint:<rule-flag>` comments from being used',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/ban-tslint-comment.md'
		},
		messages: {
			commentDetected: 'tslint comment detected: “{{ text }}”'
		},
		schema: [],
		fixable: 'code'
	}
}