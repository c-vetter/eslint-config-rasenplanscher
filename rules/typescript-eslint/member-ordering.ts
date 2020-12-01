export const typescriptEslintMemberOrdering = {
	id: '@typescript-eslint/member-ordering',
	key: 'member-ordering',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Require a consistent member declaration order',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/member-ordering.md'
		},
		messages: {
			incorrectOrder: 'Member “{{member}}” should be declared before member “{{beforeMember}}”.',
			incorrectGroupOrder: 'Member {{name}} should be declared before all {{rank}} definitions.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					default: {
						oneOf: [
							{
								type: 'string',
								enum: [
									'never'
								]
							},
							{
								type: 'array',
								items: {
									enum: [
										'signature',
										'field',
										'public-field',
										'public-decorated-field',
										'decorated-field',
										'static-field',
										'public-static-field',
										'instance-field',
										'public-instance-field',
										'abstract-field',
										'public-abstract-field',
										'protected-field',
										'protected-decorated-field',
										'protected-static-field',
										'protected-instance-field',
										'protected-abstract-field',
										'private-field',
										'private-decorated-field',
										'private-static-field',
										'private-instance-field',
										'private-abstract-field',
										'method',
										'public-method',
										'public-decorated-method',
										'decorated-method',
										'static-method',
										'public-static-method',
										'instance-method',
										'public-instance-method',
										'abstract-method',
										'public-abstract-method',
										'protected-method',
										'protected-decorated-method',
										'protected-static-method',
										'protected-instance-method',
										'protected-abstract-method',
										'private-method',
										'private-decorated-method',
										'private-static-method',
										'private-instance-method',
										'private-abstract-method',
										'constructor',
										'public-constructor',
										'protected-constructor',
										'private-constructor'
									]
								}
							},
							{
								type: 'object',
								properties: {
									memberTypes: {
										oneOf: [
											{
												type: 'array',
												items: {
													enum: [
														'signature',
														'field',
														'public-field',
														'public-decorated-field',
														'decorated-field',
														'static-field',
														'public-static-field',
														'instance-field',
														'public-instance-field',
														'abstract-field',
														'public-abstract-field',
														'protected-field',
														'protected-decorated-field',
														'protected-static-field',
														'protected-instance-field',
														'protected-abstract-field',
														'private-field',
														'private-decorated-field',
														'private-static-field',
														'private-instance-field',
														'private-abstract-field',
														'method',
														'public-method',
														'public-decorated-method',
														'decorated-method',
														'static-method',
														'public-static-method',
														'instance-method',
														'public-instance-method',
														'abstract-method',
														'public-abstract-method',
														'protected-method',
														'protected-decorated-method',
														'protected-static-method',
														'protected-instance-method',
														'protected-abstract-method',
														'private-method',
														'private-decorated-method',
														'private-static-method',
														'private-instance-method',
														'private-abstract-method',
														'constructor',
														'public-constructor',
														'protected-constructor',
														'private-constructor'
													]
												}
											},
											{
												type: 'string',
												enum: [
													'never'
												]
											}
										]
									},
									order: {
										type: 'string',
										enum: [
											'alphabetically',
											'as-written'
										]
									}
								},
								additionalProperties: false
							}
						]
					},
					classes: {
						oneOf: [
							{
								type: 'string',
								enum: [
									'never'
								]
							},
							{
								type: 'array',
								items: {
									enum: [
										'signature',
										'field',
										'public-field',
										'public-decorated-field',
										'decorated-field',
										'static-field',
										'public-static-field',
										'instance-field',
										'public-instance-field',
										'abstract-field',
										'public-abstract-field',
										'protected-field',
										'protected-decorated-field',
										'protected-static-field',
										'protected-instance-field',
										'protected-abstract-field',
										'private-field',
										'private-decorated-field',
										'private-static-field',
										'private-instance-field',
										'private-abstract-field',
										'method',
										'public-method',
										'public-decorated-method',
										'decorated-method',
										'static-method',
										'public-static-method',
										'instance-method',
										'public-instance-method',
										'abstract-method',
										'public-abstract-method',
										'protected-method',
										'protected-decorated-method',
										'protected-static-method',
										'protected-instance-method',
										'protected-abstract-method',
										'private-method',
										'private-decorated-method',
										'private-static-method',
										'private-instance-method',
										'private-abstract-method',
										'constructor',
										'public-constructor',
										'protected-constructor',
										'private-constructor'
									]
								}
							},
							{
								type: 'object',
								properties: {
									memberTypes: {
										oneOf: [
											{
												type: 'array',
												items: {
													enum: [
														'signature',
														'field',
														'public-field',
														'public-decorated-field',
														'decorated-field',
														'static-field',
														'public-static-field',
														'instance-field',
														'public-instance-field',
														'abstract-field',
														'public-abstract-field',
														'protected-field',
														'protected-decorated-field',
														'protected-static-field',
														'protected-instance-field',
														'protected-abstract-field',
														'private-field',
														'private-decorated-field',
														'private-static-field',
														'private-instance-field',
														'private-abstract-field',
														'method',
														'public-method',
														'public-decorated-method',
														'decorated-method',
														'static-method',
														'public-static-method',
														'instance-method',
														'public-instance-method',
														'abstract-method',
														'public-abstract-method',
														'protected-method',
														'protected-decorated-method',
														'protected-static-method',
														'protected-instance-method',
														'protected-abstract-method',
														'private-method',
														'private-decorated-method',
														'private-static-method',
														'private-instance-method',
														'private-abstract-method',
														'constructor',
														'public-constructor',
														'protected-constructor',
														'private-constructor'
													]
												}
											},
											{
												type: 'string',
												enum: [
													'never'
												]
											}
										]
									},
									order: {
										type: 'string',
										enum: [
											'alphabetically',
											'as-written'
										]
									}
								},
								additionalProperties: false
							}
						]
					},
					classExpressions: {
						oneOf: [
							{
								type: 'string',
								enum: [
									'never'
								]
							},
							{
								type: 'array',
								items: {
									enum: [
										'signature',
										'field',
										'public-field',
										'public-decorated-field',
										'decorated-field',
										'static-field',
										'public-static-field',
										'instance-field',
										'public-instance-field',
										'abstract-field',
										'public-abstract-field',
										'protected-field',
										'protected-decorated-field',
										'protected-static-field',
										'protected-instance-field',
										'protected-abstract-field',
										'private-field',
										'private-decorated-field',
										'private-static-field',
										'private-instance-field',
										'private-abstract-field',
										'method',
										'public-method',
										'public-decorated-method',
										'decorated-method',
										'static-method',
										'public-static-method',
										'instance-method',
										'public-instance-method',
										'abstract-method',
										'public-abstract-method',
										'protected-method',
										'protected-decorated-method',
										'protected-static-method',
										'protected-instance-method',
										'protected-abstract-method',
										'private-method',
										'private-decorated-method',
										'private-static-method',
										'private-instance-method',
										'private-abstract-method',
										'constructor',
										'public-constructor',
										'protected-constructor',
										'private-constructor'
									]
								}
							},
							{
								type: 'object',
								properties: {
									memberTypes: {
										oneOf: [
											{
												type: 'array',
												items: {
													enum: [
														'signature',
														'field',
														'public-field',
														'public-decorated-field',
														'decorated-field',
														'static-field',
														'public-static-field',
														'instance-field',
														'public-instance-field',
														'abstract-field',
														'public-abstract-field',
														'protected-field',
														'protected-decorated-field',
														'protected-static-field',
														'protected-instance-field',
														'protected-abstract-field',
														'private-field',
														'private-decorated-field',
														'private-static-field',
														'private-instance-field',
														'private-abstract-field',
														'method',
														'public-method',
														'public-decorated-method',
														'decorated-method',
														'static-method',
														'public-static-method',
														'instance-method',
														'public-instance-method',
														'abstract-method',
														'public-abstract-method',
														'protected-method',
														'protected-decorated-method',
														'protected-static-method',
														'protected-instance-method',
														'protected-abstract-method',
														'private-method',
														'private-decorated-method',
														'private-static-method',
														'private-instance-method',
														'private-abstract-method',
														'constructor',
														'public-constructor',
														'protected-constructor',
														'private-constructor'
													]
												}
											},
											{
												type: 'string',
												enum: [
													'never'
												]
											}
										]
									},
									order: {
										type: 'string',
										enum: [
											'alphabetically',
											'as-written'
										]
									}
								},
								additionalProperties: false
							}
						]
					},
					interfaces: {
						oneOf: [
							{
								type: 'string',
								enum: [
									'never'
								]
							},
							{
								type: 'array',
								items: {
									enum: [
										'signature',
										'field',
										'method',
										'constructor'
									]
								}
							},
							{
								type: 'object',
								properties: {
									memberTypes: {
										oneOf: [
											{
												type: 'array',
												items: {
													enum: [
														'signature',
														'field',
														'method',
														'constructor'
													]
												}
											},
											{
												type: 'string',
												enum: [
													'never'
												]
											}
										]
									},
									order: {
										type: 'string',
										enum: [
											'alphabetically',
											'as-written'
										]
									}
								},
								additionalProperties: false
							}
						]
					},
					typeLiterals: {
						oneOf: [
							{
								type: 'string',
								enum: [
									'never'
								]
							},
							{
								type: 'array',
								items: {
									enum: [
										'signature',
										'field',
										'method',
										'constructor'
									]
								}
							},
							{
								type: 'object',
								properties: {
									memberTypes: {
										oneOf: [
											{
												type: 'array',
												items: {
													enum: [
														'signature',
														'field',
														'method',
														'constructor'
													]
												}
											},
											{
												type: 'string',
												enum: [
													'never'
												]
											}
										]
									},
									order: {
										type: 'string',
										enum: [
											'alphabetically',
											'as-written'
										]
									}
								},
								additionalProperties: false
							}
						]
					}
				},
				additionalProperties: false
			}
		]
	}
}