export const typescriptEslintNoParameterProperties = {
	id: '@typescript-eslint/no-parameter-properties',
	key: 'no-parameter-properties',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow the use of parameter properties in class constructors',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-parameter-properties.md'
		},
		messages: {
			noParamProp: 'Property {{parameter}} cannot be declared in the constructor.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allows: {
						type: 'array',
						items: {
							enum: [
								'readonly',
								'private',
								'protected',
								'public',
								'private readonly',
								'protected readonly',
								'public readonly'
							]
						},
						minItems: 1
					}
				},
				additionalProperties: false
			}
		]
	}
}