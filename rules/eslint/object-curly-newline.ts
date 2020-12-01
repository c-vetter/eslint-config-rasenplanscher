export const objectCurlyNewline = {
	id: 'object-curly-newline',
	key: 'object-curly-newline',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce consistent line breaks inside braces',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/object-curly-newline'
		},
		fixable: 'whitespace',
		schema: [
			{
				oneOf: [
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
									multiline: {
										type: 'boolean'
									},
									minProperties: {
										type: 'integer',
										minimum: 0
									},
									consistent: {
										type: 'boolean'
									}
								},
								additionalProperties: false,
								minProperties: 1
							}
						]
					},
					{
						type: 'object',
						properties: {
							ObjectExpression: {
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
											multiline: {
												type: 'boolean'
											},
											minProperties: {
												type: 'integer',
												minimum: 0
											},
											consistent: {
												type: 'boolean'
											}
										},
										additionalProperties: false,
										minProperties: 1
									}
								]
							},
							ObjectPattern: {
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
											multiline: {
												type: 'boolean'
											},
											minProperties: {
												type: 'integer',
												minimum: 0
											},
											consistent: {
												type: 'boolean'
											}
										},
										additionalProperties: false,
										minProperties: 1
									}
								]
							},
							ImportDeclaration: {
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
											multiline: {
												type: 'boolean'
											},
											minProperties: {
												type: 'integer',
												minimum: 0
											},
											consistent: {
												type: 'boolean'
											}
										},
										additionalProperties: false,
										minProperties: 1
									}
								]
							},
							ExportDeclaration: {
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
											multiline: {
												type: 'boolean'
											},
											minProperties: {
												type: 'integer',
												minimum: 0
											},
											consistent: {
												type: 'boolean'
											}
										},
										additionalProperties: false,
										minProperties: 1
									}
								]
							}
						},
						additionalProperties: false,
						minProperties: 1
					}
				]
			}
		],
		messages: {
			unexpectedLinebreakBeforeClosingBrace: 'Unexpected line break before this closing brace.',
			unexpectedLinebreakAfterOpeningBrace: 'Unexpected line break after this opening brace.',
			expectedLinebreakBeforeClosingBrace: 'Expected a line break before this closing brace.',
			expectedLinebreakAfterOpeningBrace: 'Expected a line break after this opening brace.'
		}
	}
}