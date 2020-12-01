export const typescriptEslintMemberDelimiterStyle = {
	id: '@typescript-eslint/member-delimiter-style',
	key: 'member-delimiter-style',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Require a specific member delimiter style for interfaces and type literals',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/member-delimiter-style.md'
		},
		fixable: 'code',
		messages: {
			unexpectedComma: 'Unexpected separator (,).',
			unexpectedSemi: 'Unexpected separator (;).',
			expectedComma: 'Expected a comma.',
			expectedSemi: 'Expected a semicolon.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					multiline: {
						type: 'object',
						properties: {
							delimiter: {
								enum: [
									'none',
									'semi',
									'comma'
								]
							},
							requireLast: {
								type: 'boolean'
							}
						},
						additionalProperties: false
					},
					singleline: {
						type: 'object',
						properties: {
							delimiter: {
								enum: [
									'semi',
									'comma'
								]
							},
							requireLast: {
								type: 'boolean'
							}
						},
						additionalProperties: false
					},
					overrides: {
						type: 'object',
						properties: {
							interface: {
								type: 'object',
								properties: {
									multiline: {
										type: 'object',
										properties: {
											delimiter: {
												enum: [
													'none',
													'semi',
													'comma'
												]
											},
											requireLast: {
												type: 'boolean'
											}
										},
										additionalProperties: false
									},
									singleline: {
										type: 'object',
										properties: {
											delimiter: {
												enum: [
													'semi',
													'comma'
												]
											},
											requireLast: {
												type: 'boolean'
											}
										},
										additionalProperties: false
									}
								},
								additionalProperties: false
							},
							typeLiteral: {
								type: 'object',
								properties: {
									multiline: {
										type: 'object',
										properties: {
											delimiter: {
												enum: [
													'none',
													'semi',
													'comma'
												]
											},
											requireLast: {
												type: 'boolean'
											}
										},
										additionalProperties: false
									},
									singleline: {
										type: 'object',
										properties: {
											delimiter: {
												enum: [
													'semi',
													'comma'
												]
											},
											requireLast: {
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
				},
				additionalProperties: false
			}
		]
	}
}