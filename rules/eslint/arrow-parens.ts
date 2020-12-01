export const arrowParens = {
	id: 'arrow-parens',
	key: 'arrow-parens',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'require parentheses around arrow function arguments',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/arrow-parens'
		},
		fixable: 'code',
		schema: [
			{
				enum: [
					'always',
					'as-needed'
				]
			},
			{
				type: 'object',
				properties: {
					requireForBlockBody: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpectedParens: 'Unexpected parentheses around single function argument.',
			expectedParens: 'Expected parentheses around arrow function argument.',
			unexpectedParensInline: 'Unexpected parentheses around single function argument having a body with no curly braces.',
			expectedParensBlock: 'Expected parentheses around arrow function argument having a body with curly braces.'
		}
	}
}