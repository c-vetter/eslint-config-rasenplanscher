export const maxStatementsPerLine = {
	id: 'max-statements-per-line',
	key: 'max-statements-per-line',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce a maximum number of statements allowed per line',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/max-statements-per-line'
		},
		schema: [
			{
				type: 'object',
				properties: {
					max: {
						type: 'integer',
						minimum: 1,
						default: 1
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			exceed: 'This line has {{numberOfStatementsOnThisLine}} {{statements}}. Maximum allowed is {{maxStatementsPerLine}}.'
		}
	}
}