export const noMisleadingCharacterClass = {
	id: 'no-misleading-character-class',
	key: 'no-misleading-character-class',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow characters which are made with multiple code points in character class syntax',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-misleading-character-class'
		},
		schema: [],
		messages: {
			surrogatePairWithoutUFlag: 'Unexpected surrogate pair in character class. Use ‘u’ flag.',
			combiningClass: 'Unexpected combined character in character class.',
			emojiModifier: 'Unexpected modified Emoji in character class.',
			regionalIndicatorSymbol: 'Unexpected national flag in character class.',
			zwj: 'Unexpected joined character sequence in character class.'
		}
	}
}