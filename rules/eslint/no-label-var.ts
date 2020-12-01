export const noLabelVar = {
	id: 'no-label-var',
	key: 'no-label-var',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow labels that share a name with a variable',
			category: 'Variables',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-label-var'
		},
		schema: [],
		messages: {
			identifierClashWithLabel: 'Found identifier with same name as label.'
		}
	}
}