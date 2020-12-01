export const typescriptEslintNoLossOfPrecision = {
	id: '@typescript-eslint/no-loss-of-precision',
	key: 'no-loss-of-precision',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow literal numbers that lose precision',
			category: 'Possible Errors',
			recommended: false,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-loss-of-precision.md'
		},
		schema: [],
		messages: {
			noLossOfPrecision: 'This number literal will lose precision at runtime.'
		}
	}
}