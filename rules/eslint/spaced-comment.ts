export const spacedComment = {
	id: 'spaced-comment',
	key: 'spaced-comment',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce consistent spacing after the `//` or `/*` in a comment',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/spaced-comment'
		},
		fixable: 'whitespace',
		schema: [
			{
				enum: [
					'always',
					'never'
				]
			},
			{
				type: 'object',
				properties: {
					exceptions: {
						type: 'array',
						items: {
							type: 'string'
						}
					},
					markers: {
						type: 'array',
						items: {
							type: 'string'
						}
					},
					line: {
						type: 'object',
						properties: {
							exceptions: {
								type: 'array',
								items: {
									type: 'string'
								}
							},
							markers: {
								type: 'array',
								items: {
									type: 'string'
								}
							}
						},
						additionalProperties: false
					},
					block: {
						type: 'object',
						properties: {
							exceptions: {
								type: 'array',
								items: {
									type: 'string'
								}
							},
							markers: {
								type: 'array',
								items: {
									type: 'string'
								}
							},
							balanced: {
								type: 'boolean',
								default: false
							}
						},
						additionalProperties: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpectedSpaceAfterMarker: 'Unexpected space or tab after marker ({{refChar}}) in comment.',
			expectedExceptionAfter: 'Expected exception block, space or tab after ‘{{refChar}}’ in comment.',
			unexpectedSpaceBefore: 'Unexpected space or tab before ‘*/’ in comment.',
			unexpectedSpaceAfter: 'Unexpected space or tab after ‘{{refChar}}’ in comment.',
			expectedSpaceBefore: 'Expected space or tab before ‘*/’ in comment.',
			expectedSpaceAfter: 'Expected space or tab after ‘{{refChar}}’ in comment.'
		}
	}
}