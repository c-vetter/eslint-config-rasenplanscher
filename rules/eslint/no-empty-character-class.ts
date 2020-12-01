export const noEmptyCharacterClass = {
	id: 'no-empty-character-class',
	key: 'no-empty-character-class',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow empty character classes in regular expressions',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-empty-character-class'
		},
		schema: [],
		messages: {
			unexpected: 'Empty class.'
		}
	}
}