export const noUselessRename = {
	id: 'no-useless-rename',
	key: 'no-useless-rename',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow renaming import, export, and destructured assignments to the same name',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-useless-rename'
		},
		fixable: 'code',
		schema: [
			{
				type: 'object',
				properties: {
					ignoreDestructuring: {
						type: 'boolean',
						default: false
					},
					ignoreImport: {
						type: 'boolean',
						default: false
					},
					ignoreExport: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unnecessarilyRenamed: '{{type}} {{name}} unnecessarily renamed.'
		}
	}
}