export const nonblockStatementBodyPosition = {
	id: 'nonblock-statement-body-position',
	key: 'nonblock-statement-body-position',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce the location of single-line statements',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/nonblock-statement-body-position'
		},
		fixable: 'whitespace',
		schema: [
			{
				enum: [
					'beside',
					'below',
					'any'
				]
			},
			{
				properties: {
					overrides: {
						properties: {
							if: {
								enum: [
									'beside',
									'below',
									'any'
								]
							},
							else: {
								enum: [
									'beside',
									'below',
									'any'
								]
							},
							while: {
								enum: [
									'beside',
									'below',
									'any'
								]
							},
							do: {
								enum: [
									'beside',
									'below',
									'any'
								]
							},
							for: {
								enum: [
									'beside',
									'below',
									'any'
								]
							}
						},
						additionalProperties: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			expectNoLinebreak: 'Expected no linebreak before this statement.',
			expectLinebreak: 'Expected a linebreak before this statement.'
		}
	}
}