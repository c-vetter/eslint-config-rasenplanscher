export const typescriptEslintNoImplicitAnyCatch = {
	id: '@typescript-eslint/no-implicit-any-catch',
	key: 'no-implicit-any-catch',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallow usage of the implicit `any` type in catch clauses',
			category: 'Best Practices',
			recommended: false,
			suggestion: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md'
		},
		fixable: 'code',
		messages: {
			implicitAnyInCatch: 'Implicit any in catch clause',
			explicitAnyInCatch: 'Explicit any in catch clause',
			suggestExplicitUnknown: 'Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.'
		},
		schema: [
			{
				type: 'object',
				additionalProperties: false,
				properties: {
					allowExplicitAny: {
						type: 'boolean'
					}
				}
			}
		]
	}
}