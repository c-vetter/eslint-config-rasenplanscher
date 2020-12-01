export const groupedAccessorPairs = {
	id: 'grouped-accessor-pairs',
	key: 'grouped-accessor-pairs',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require grouped accessor pairs in object literals and classes',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/grouped-accessor-pairs'
		},
		schema: [
			{
				enum: [
					'anyOrder',
					'getBeforeSet',
					'setBeforeGet'
				]
			}
		],
		messages: {
			notGrouped: 'Accessor pair {{ formerName }} and {{ latterName }} should be grouped.',
			invalidOrder: 'Expected {{ latterName }} to be before {{ formerName }}.'
		}
	}
}