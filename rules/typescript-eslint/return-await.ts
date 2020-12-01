export const typescriptEslintReturnAwait = {
	id: '@typescript-eslint/return-await',
	key: 'return-await',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Enforces consistent returning of awaited values',
			category: 'Best Practices',
			recommended: false,
			requiresTypeChecking: true,
			extendsBaseRule: 'no-return-await',
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/return-await.md'
		},
		fixable: 'code',
		type: 'problem',
		messages: {
			nonPromiseAwait: 'Returning an awaited value that is not a promise is not allowed.',
			disallowedPromiseAwait: 'Returning an awaited promise is not allowed in this context.',
			requiredPromiseAwait: 'Returning an awaited promise is required in this context.'
		},
		schema: [
			{
				enum: [
					'in-try-catch',
					'always',
					'never'
				]
			}
		]
	}
}