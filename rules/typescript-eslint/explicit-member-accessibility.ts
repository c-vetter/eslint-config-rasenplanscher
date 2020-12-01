export const typescriptEslintExplicitMemberAccessibility = {
	id: '@typescript-eslint/explicit-member-accessibility',
	key: 'explicit-member-accessibility',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Require explicit accessibility modifiers on class properties and methods',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md'
		},
		fixable: 'code',
		messages: {
			missingAccessibility: 'Missing accessibility modifier on {{type}} {{name}}.',
			unwantedPublicAccessibility: 'Public accessibility modifier on {{type}} {{name}}.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					accessibility: {
						enum: [
							'explicit',
							'no-public',
							'off'
						]
					},
					overrides: {
						type: 'object',
						properties: {
							accessors: {
								enum: [
									'explicit',
									'no-public',
									'off'
								]
							},
							constructors: {
								enum: [
									'explicit',
									'no-public',
									'off'
								]
							},
							methods: {
								enum: [
									'explicit',
									'no-public',
									'off'
								]
							},
							properties: {
								enum: [
									'explicit',
									'no-public',
									'off'
								]
							},
							parameterProperties: {
								enum: [
									'explicit',
									'no-public',
									'off'
								]
							}
						},
						additionalProperties: false
					},
					ignoredMethodNames: {
						type: 'array',
						items: {
							type: 'string'
						}
					}
				},
				additionalProperties: false
			}
		]
	}
}