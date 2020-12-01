export const typescriptEslintTypeAnnotationSpacing = {
	id: '@typescript-eslint/type-annotation-spacing',
	key: 'type-annotation-spacing',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'Require consistent spacing around type annotations',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/type-annotation-spacing.md'
		},
		fixable: 'whitespace',
		messages: {
			expectedSpaceAfter: 'Expected a space after the ‘{{type}}’.',
			expectedSpaceBefore: 'Expected a space before the ‘{{type}}’.',
			unexpectedSpaceAfter: 'Unexpected space after the ‘{{type}}’.',
			unexpectedSpaceBefore: 'Unexpected space before the ‘{{type}}’.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					before: {
						type: 'boolean'
					},
					after: {
						type: 'boolean'
					},
					overrides: {
						type: 'object',
						properties: {
							colon: {
								type: 'object',
								properties: {
									before: {
										type: 'boolean'
									},
									after: {
										type: 'boolean'
									}
								},
								additionalProperties: false
							},
							arrow: {
								type: 'object',
								properties: {
									before: {
										type: 'boolean'
									},
									after: {
										type: 'boolean'
									}
								},
								additionalProperties: false
							},
							variable: {
								type: 'object',
								properties: {
									before: {
										type: 'boolean'
									},
									after: {
										type: 'boolean'
									}
								},
								additionalProperties: false
							},
							parameter: {
								type: 'object',
								properties: {
									before: {
										type: 'boolean'
									},
									after: {
										type: 'boolean'
									}
								},
								additionalProperties: false
							},
							property: {
								type: 'object',
								properties: {
									before: {
										type: 'boolean'
									},
									after: {
										type: 'boolean'
									}
								},
								additionalProperties: false
							},
							returnType: {
								type: 'object',
								properties: {
									before: {
										type: 'boolean'
									},
									after: {
										type: 'boolean'
									}
								},
								additionalProperties: false
							}
						},
						additionalProperties: false
					}
				},
				additionalProperties: false
			}
		]
	}
}