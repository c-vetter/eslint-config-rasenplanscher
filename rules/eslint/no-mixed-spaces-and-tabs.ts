export const noMixedSpacesAndTabs = {
	id: 'no-mixed-spaces-and-tabs',
	key: 'no-mixed-spaces-and-tabs',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'disallow mixed spaces and tabs for indentation',
			category: 'Stylistic Issues',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-mixed-spaces-and-tabs'
		},
		schema: [
			{
				enum: [
					'smart-tabs',
					true,
					false
				]
			}
		],
		messages: {
			mixedSpacesAndTabs: 'Mixed spaces and tabs.'
		}
	}
}