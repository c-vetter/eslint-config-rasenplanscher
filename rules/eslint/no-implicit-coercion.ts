export const noImplicitCoercion = {
	id: 'no-implicit-coercion',
	key: 'no-implicit-coercion',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow shorthand type conversions',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-implicit-coercion'
		},
		fixable: 'code',
		schema: [
			{
				type: 'object',
				properties: {
					boolean: {
						type: 'boolean',
						default: true
					},
					number: {
						type: 'boolean',
						default: true
					},
					string: {
						type: 'boolean',
						default: true
					},
					allow: {
						type: 'array',
						items: {
							enum: [
								'~',
								'!!',
								'+',
								'*'
							]
						},
						uniqueItems: true
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			useRecommendation: 'use `{{recommendation}}` instead.'
		}
	}
}