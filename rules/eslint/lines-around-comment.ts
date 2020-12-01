export const linesAroundComment = {
	id: 'lines-around-comment',
	key: 'lines-around-comment',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'require empty lines around comments',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/lines-around-comment'
		},
		fixable: 'whitespace',
		schema: [
			{
				type: 'object',
				properties: {
					beforeBlockComment: {
						type: 'boolean',
						default: true
					},
					afterBlockComment: {
						type: 'boolean',
						default: false
					},
					beforeLineComment: {
						type: 'boolean',
						default: false
					},
					afterLineComment: {
						type: 'boolean',
						default: false
					},
					allowBlockStart: {
						type: 'boolean',
						default: false
					},
					allowBlockEnd: {
						type: 'boolean',
						default: false
					},
					allowClassStart: {
						type: 'boolean'
					},
					allowClassEnd: {
						type: 'boolean'
					},
					allowObjectStart: {
						type: 'boolean'
					},
					allowObjectEnd: {
						type: 'boolean'
					},
					allowArrayStart: {
						type: 'boolean'
					},
					allowArrayEnd: {
						type: 'boolean'
					},
					ignorePattern: {
						type: 'string'
					},
					applyDefaultIgnorePatterns: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			after: 'Expected line after comment.',
			before: 'Expected line before comment.'
		}
	}
}