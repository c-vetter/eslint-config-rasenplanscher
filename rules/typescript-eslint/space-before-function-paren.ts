export const typescriptEslintSpaceBeforeFunctionParen = {
	id: '@typescript-eslint/space-before-function-paren',
	key: 'space-before-function-paren',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'Enforces consistent spacing before function parenthesis',
			category: 'Stylistic Issues',
			recommended: false,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/space-before-function-paren.md'
		},
		fixable: 'whitespace',
		schema: [
			{
				oneOf: [
					{
						enum: [
							'always',
							'never'
						]
					},
					{
						type: 'object',
						properties: {
							anonymous: {
								enum: [
									'always',
									'never',
									'ignore'
								]
							},
							named: {
								enum: [
									'always',
									'never',
									'ignore'
								]
							},
							asyncArrow: {
								enum: [
									'always',
									'never',
									'ignore'
								]
							}
						},
						additionalProperties: false
					}
				]
			}
		],
		messages: {
			unexpected: 'Unexpected space before function parentheses.',
			missing: 'Missing space before function parentheses.'
		}
	}
}