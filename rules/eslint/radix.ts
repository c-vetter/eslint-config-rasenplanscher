export const radix = {
	id: 'radix',
	key: 'radix',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce the consistent use of the radix argument when using `parseInt()`',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/radix'
		},
		schema: [
			{
				enum: [
					'always',
					'as-needed'
				]
			}
		],
		messages: {
			missingParameters: 'Missing parameters.',
			redundantRadix: 'Redundant radix parameter.',
			missingRadix: 'Missing radix parameter.',
			invalidRadix: 'Invalid radix parameter, must be an integer between 2 and 36.'
		}
	}
}