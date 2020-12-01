export const paddedBlocks = {
	id: 'padded-blocks',
	key: 'padded-blocks',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'require or disallow padding within blocks',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/padded-blocks'
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
							blocks: {
								enum: [
									'always',
									'never'
								]
							},
							switches: {
								enum: [
									'always',
									'never'
								]
							},
							classes: {
								enum: [
									'always',
									'never'
								]
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
					allowSingleLineBlocks: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			alwaysPadBlock: 'Block must be padded by blank lines.',
			neverPadBlock: 'Block must not be padded by blank lines.'
		}
	}
}