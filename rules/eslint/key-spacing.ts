export const keySpacing = {
	id: 'key-spacing',
	key: 'key-spacing',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce consistent spacing between keys and values in object literal properties',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/key-spacing'
		},
		fixable: 'whitespace',
		schema: [
			{
				anyOf: [
					{
						type: 'object',
						properties: {
							align: {
								anyOf: [
									{
										enum: [
											'colon',
											'value'
										]
									},
									{
										type: 'object',
										properties: {
											mode: {
												enum: [
													'strict',
													'minimum'
												]
											},
											on: {
												enum: [
													'colon',
													'value'
												]
											},
											beforeColon: {
												type: 'boolean'
											},
											afterColon: {
												type: 'boolean'
											}
										},
										additionalProperties: false
									}
								]
							},
							mode: {
								enum: [
									'strict',
									'minimum'
								]
							},
							beforeColon: {
								type: 'boolean'
							},
							afterColon: {
								type: 'boolean'
							}
						},
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							singleLine: {
								type: 'object',
								properties: {
									mode: {
										enum: [
											'strict',
											'minimum'
										]
									},
									beforeColon: {
										type: 'boolean'
									},
									afterColon: {
										type: 'boolean'
									}
								},
								additionalProperties: false
							},
							multiLine: {
								type: 'object',
								properties: {
									align: {
										anyOf: [
											{
												enum: [
													'colon',
													'value'
												]
											},
											{
												type: 'object',
												properties: {
													mode: {
														enum: [
															'strict',
															'minimum'
														]
													},
													on: {
														enum: [
															'colon',
															'value'
														]
													},
													beforeColon: {
														type: 'boolean'
													},
													afterColon: {
														type: 'boolean'
													}
												},
												additionalProperties: false
											}
										]
									},
									mode: {
										enum: [
											'strict',
											'minimum'
										]
									},
									beforeColon: {
										type: 'boolean'
									},
									afterColon: {
										type: 'boolean'
									}
								},
								additionalProperties: false
							}
						},
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							singleLine: {
								type: 'object',
								properties: {
									mode: {
										enum: [
											'strict',
											'minimum'
										]
									},
									beforeColon: {
										type: 'boolean'
									},
									afterColon: {
										type: 'boolean'
									}
								},
								additionalProperties: false
							},
							multiLine: {
								type: 'object',
								properties: {
									mode: {
										enum: [
											'strict',
											'minimum'
										]
									},
									beforeColon: {
										type: 'boolean'
									},
									afterColon: {
										type: 'boolean'
									}
								},
								additionalProperties: false
							},
							align: {
								type: 'object',
								properties: {
									mode: {
										enum: [
											'strict',
											'minimum'
										]
									},
									on: {
										enum: [
											'colon',
											'value'
										]
									},
									beforeColon: {
										type: 'boolean'
									},
									afterColon: {
										type: 'boolean'
									}
								},
								additionalProperties: false
							}
						},
						additionalProperties: false
					}
				]
			}
		],
		messages: {
			extraKey: 'Extra space after {{computed}}key ‘{{key}}’.',
			extraValue: 'Extra space before value for {{computed}}key ‘{{key}}’.',
			missingKey: 'Missing space after {{computed}}key ‘{{key}}’.',
			missingValue: 'Missing space before value for {{computed}}key ‘{{key}}’.'
		}
	}
}