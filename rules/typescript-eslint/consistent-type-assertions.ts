export const typescriptEslintConsistentTypeAssertions = {
	id: '@typescript-eslint/consistent-type-assertions',
	key: 'consistent-type-assertions',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			category: 'Best Practices',
			description: 'Enforces consistent usage of type assertions',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/consistent-type-assertions.md'
		},
		messages: {
			as: 'Use ‘as {{cast}}’ instead of ‘<{{cast}}>’.',
			'angle-bracket': 'Use ‘<{{cast}}>’ instead of ‘as {{cast}}’.',
			never: 'Do not use any type assertions.',
			unexpectedObjectTypeAssertion: 'Always prefer const x: T = { ... }.'
		},
		schema: [
			{
				oneOf: [
					{
						type: 'object',
						properties: {
							assertionStyle: {
								enum: [
									'never'
								]
							}
						},
						additionalProperties: false,
						required: [
							'assertionStyle'
						]
					},
					{
						type: 'object',
						properties: {
							assertionStyle: {
								enum: [
									'as',
									'angle-bracket'
								]
							},
							objectLiteralTypeAssertions: {
								enum: [
									'allow',
									'allow-as-parameter',
									'never'
								]
							}
						},
						additionalProperties: false,
						required: [
							'assertionStyle'
						]
					}
				]
			}
		]
	}
}