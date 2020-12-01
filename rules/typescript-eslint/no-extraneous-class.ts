export const typescriptEslintNoExtraneousClass = {
	id: '@typescript-eslint/no-extraneous-class',
	key: 'no-extraneous-class',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Forbids the use of classes as namespaces',
			category: 'Best Practices',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-extraneous-class.md'
		},
		schema: [
			{
				type: 'object',
				additionalProperties: false,
				properties: {
					allowConstructorOnly: {
						type: 'boolean'
					},
					allowEmpty: {
						type: 'boolean'
					},
					allowStaticOnly: {
						type: 'boolean'
					},
					allowWithDecorator: {
						type: 'boolean'
					}
				}
			}
		],
		messages: {
			empty: 'Unexpected empty class.',
			onlyStatic: 'Unexpected class with only static properties.',
			onlyConstructor: 'Unexpected class with only a constructor.'
		}
	}
}