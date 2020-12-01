export const accessorPairs = {
	id: 'accessor-pairs',
	key: 'accessor-pairs',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce getter and setter pairs in objects and classes',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/accessor-pairs'
		},
		schema: [
			{
				type: 'object',
				properties: {
					getWithoutSet: {
						type: 'boolean',
						default: false
					},
					setWithoutGet: {
						type: 'boolean',
						default: true
					},
					enforceForClassMembers: {
						type: 'boolean',
						default: true
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			missingGetterInPropertyDescriptor: 'Getter is not present in property descriptor.',
			missingSetterInPropertyDescriptor: 'Setter is not present in property descriptor.',
			missingGetterInObjectLiteral: 'Getter is not present for {{ name }}.',
			missingSetterInObjectLiteral: 'Setter is not present for {{ name }}.',
			missingGetterInClass: 'Getter is not present for class {{ name }}.',
			missingSetterInClass: 'Setter is not present for class {{ name }}.'
		}
	}
}