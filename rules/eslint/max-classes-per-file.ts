export const maxClassesPerFile = {
	id: 'max-classes-per-file',
	key: 'max-classes-per-file',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce a maximum number of classes per file',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/max-classes-per-file'
		},
		schema: [
			{
				type: 'integer',
				minimum: 1
			}
		],
		messages: {
			maximumExceeded: 'File has too many classes ({{ classCount }}). Maximum allowed is {{ max }}.'
		}
	}
}