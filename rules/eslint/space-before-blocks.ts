export const spaceBeforeBlocks = {
	id: 'space-before-blocks',
	key: 'space-before-blocks',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce consistent spacing before blocks',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/space-before-blocks'
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
							keywords: {
								enum: [
									'always',
									'never',
									'off'
								]
							},
							functions: {
								enum: [
									'always',
									'never',
									'off'
								]
							},
							classes: {
								enum: [
									'always',
									'never',
									'off'
								]
							}
						},
						additionalProperties: false
					}
				]
			}
		],
		messages: {
			unexpectedSpace: 'Unexpected space before opening brace.',
			missingSpace: 'Missing space before opening brace.'
		}
	}
}