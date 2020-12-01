export const generatorStarSpacing = {
	id: 'generator-star-spacing',
	key: 'generator-star-spacing',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce consistent spacing around `*` operators in generator functions',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/generator-star-spacing'
		},
		fixable: 'whitespace',
		schema: [
			{
				oneOf: [
					{
						enum: [
							'before',
							'after',
							'both',
							'neither'
						]
					},
					{
						type: 'object',
						properties: {
							before: {
								type: 'boolean'
							},
							after: {
								type: 'boolean'
							},
							named: {
								oneOf: [
									{
										enum: [
											'before',
											'after',
											'both',
											'neither'
										]
									},
									{
										type: 'object',
										properties: {
											before: {
												type: 'boolean'
											},
											after: {
												type: 'boolean'
											}
										},
										additionalProperties: false
									}
								]
							},
							anonymous: {
								oneOf: [
									{
										enum: [
											'before',
											'after',
											'both',
											'neither'
										]
									},
									{
										type: 'object',
										properties: {
											before: {
												type: 'boolean'
											},
											after: {
												type: 'boolean'
											}
										},
										additionalProperties: false
									}
								]
							},
							method: {
								oneOf: [
									{
										enum: [
											'before',
											'after',
											'both',
											'neither'
										]
									},
									{
										type: 'object',
										properties: {
											before: {
												type: 'boolean'
											},
											after: {
												type: 'boolean'
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
		],
		messages: {
			missingBefore: 'Missing space before *.',
			missingAfter: 'Missing space after *.',
			unexpectedBefore: 'Unexpected space before *.',
			unexpectedAfter: 'Unexpected space after *.'
		}
	}
}