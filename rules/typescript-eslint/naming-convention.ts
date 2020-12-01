export const typescriptEslintNamingConvention = {
	id: '@typescript-eslint/naming-convention',
	key: 'naming-convention',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			category: 'Variables',
			description: 'Enforces naming conventions for everything across a codebase',
			recommended: false,
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/naming-convention.md'
		},
		type: 'suggestion',
		messages: {
			unexpectedUnderscore: '{{type}} name `{{name}}` must not have a {{position}} underscore.',
			missingUnderscore: '{{type}} name `{{name}}` must have {{count}} {{position}} underscore(s).',
			missingAffix: '{{type}} name `{{name}}` must have one of the following {{position}}es: {{affixes}}',
			satisfyCustom: '{{type}} name `{{name}}` must {{regexMatch}} the RegExp: {{regex}}',
			doesNotMatchFormat: '{{type}} name `{{name}}` must match one of the following formats: {{formats}}',
			doesNotMatchFormatTrimmed: '{{type}} name `{{name}}` trimmed as `{{processedName}}` must match one of the following formats: {{formats}}'
		},
		schema: {
			type: 'array',
			items: {
				oneOf: [
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'default',
										'variableLike',
										'memberLike',
										'typeLike',
										'method',
										'property',
										'variable',
										'function',
										'parameter',
										'parameterProperty',
										'accessor',
										'enumMember',
										'classMethod',
										'objectLiteralMethod',
										'typeMethod',
										'classProperty',
										'objectLiteralProperty',
										'typeProperty',
										'class',
										'interface',
										'typeAlias',
										'enum',
										'typeParameter'
									]
								},
								additionalItems: false
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'const',
										'readonly',
										'static',
										'public',
										'protected',
										'private',
										'abstract',
										'destructured',
										'global',
										'exported',
										'unused',
										'requiresQuotes'
									]
								},
								additionalItems: false
							},
							types: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'boolean',
										'string',
										'number',
										'function',
										'array'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'default'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'const',
										'readonly',
										'static',
										'public',
										'protected',
										'private',
										'abstract',
										'destructured',
										'global',
										'exported',
										'unused',
										'requiresQuotes'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'variableLike'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'unused'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'variable'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'const',
										'destructured',
										'exported',
										'global',
										'unused'
									]
								},
								additionalItems: false
							},
							types: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'boolean',
										'string',
										'number',
										'function',
										'array'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'function'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'exported',
										'global',
										'unused'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'parameter'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'destructured',
										'unused'
									]
								},
								additionalItems: false
							},
							types: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'boolean',
										'string',
										'number',
										'function',
										'array'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'memberLike'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'abstract',
										'private',
										'protected',
										'public',
										'readonly',
										'requiresQuotes',
										'static'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'classProperty'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'abstract',
										'private',
										'protected',
										'public',
										'readonly',
										'requiresQuotes',
										'static'
									]
								},
								additionalItems: false
							},
							types: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'boolean',
										'string',
										'number',
										'function',
										'array'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'objectLiteralProperty'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'public',
										'requiresQuotes'
									]
								},
								additionalItems: false
							},
							types: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'boolean',
										'string',
										'number',
										'function',
										'array'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'typeProperty'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'public',
										'readonly',
										'requiresQuotes'
									]
								},
								additionalItems: false
							},
							types: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'boolean',
										'string',
										'number',
										'function',
										'array'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'parameterProperty'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'private',
										'protected',
										'public',
										'readonly'
									]
								},
								additionalItems: false
							},
							types: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'boolean',
										'string',
										'number',
										'function',
										'array'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'property'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'abstract',
										'private',
										'protected',
										'public',
										'readonly',
										'requiresQuotes',
										'static'
									]
								},
								additionalItems: false
							},
							types: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'boolean',
										'string',
										'number',
										'function',
										'array'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'classMethod'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'abstract',
										'private',
										'protected',
										'public',
										'requiresQuotes',
										'static'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'objectLiteralMethod'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'public',
										'requiresQuotes'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'typeMethod'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'public',
										'requiresQuotes'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'method'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'abstract',
										'private',
										'protected',
										'public',
										'requiresQuotes',
										'static'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'accessor'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'abstract',
										'private',
										'protected',
										'public',
										'requiresQuotes',
										'static'
									]
								},
								additionalItems: false
							},
							types: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'boolean',
										'string',
										'number',
										'function',
										'array'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'enumMember'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'requiresQuotes'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'typeLike'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'abstract',
										'exported',
										'unused'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'class'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'abstract',
										'exported',
										'unused'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'interface'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'exported',
										'unused'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'typeAlias'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'exported',
										'unused'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'enum'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'exported',
										'unused'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							format: {
								oneOf: [
									{
										type: 'array',
										items: {
											type: 'string',
											enum: [
												'camelCase',
												'strictCamelCase',
												'PascalCase',
												'StrictPascalCase',
												'snake_case',
												'UPPER_CASE'
											]
										},
										additionalItems: false
									},
									{
										type: 'null'
									}
								]
							},
							custom: {
								type: 'object',
								properties: {
									match: {
										type: 'boolean'
									},
									regex: {
										type: 'string'
									}
								},
								required: [
									'match',
									'regex'
								]
							},
							leadingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							trailingUnderscore: {
								type: 'string',
								enum: [
									'forbid',
									'allow',
									'require',
									'requireDouble',
									'allowDouble',
									'allowSingleOrDouble'
								]
							},
							prefix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							suffix: {
								type: 'array',
								items: {
									type: 'string',
									minLength: 1
								},
								additionalItems: false
							},
							failureMessage: {
								type: 'string'
							},
							filter: {
								oneOf: [
									{
										type: 'string',
										minLength: 1
									},
									{
										type: 'object',
										properties: {
											match: {
												type: 'boolean'
											},
											regex: {
												type: 'string'
											}
										},
										required: [
											'match',
											'regex'
										]
									}
								]
							},
							selector: {
								type: 'string',
								enum: [
									'typeParameter'
								]
							},
							modifiers: {
								type: 'array',
								items: {
									type: 'string',
									enum: [
										'unused'
									]
								},
								additionalItems: false
							}
						},
						required: [
							'selector',
							'format'
						],
						additionalProperties: false
					}
				]
			},
			additionalItems: false
		}
	}
}