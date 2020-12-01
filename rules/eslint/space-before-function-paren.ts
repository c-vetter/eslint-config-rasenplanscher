export const spaceBeforeFunctionParen = {
	id: 'space-before-function-paren',
	key: 'space-before-function-paren',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce consistent spacing before `function` definition opening parenthesis',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/space-before-function-paren'
		},
		fixable: 'whitespace',
		schema: [
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
							anonymous: {
								enum: [
									'always',
									'never',
									'ignore'
								]
							},
							named: {
								enum: [
									'always',
									'never',
									'ignore'
								]
							},
							asyncArrow: {
								enum: [
									'always',
									'never',
									'ignore'
								]
							}
						},
						additionalProperties: false
					}
				]
			}
		],
		messages: {
			unexpectedSpace: 'Unexpected space before function parentheses.',
			missingSpace: 'Missing space before function parentheses.'
		}
	}
}