export const noUseBeforeDefine = {
	id: 'no-use-before-define',
	key: 'no-use-before-define',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow the use of variables before they are defined',
			category: 'Variables',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-use-before-define'
		},
		schema: [
			{
				oneOf: [
					{
						enum: [
							'nofunc'
						]
					},
					{
						type: 'object',
						properties: {
							functions: {
								type: 'boolean'
							},
							classes: {
								type: 'boolean'
							},
							variables: {
								type: 'boolean'
							}
						},
						additionalProperties: false
					}
				]
			}
		],
		messages: {
			usedBeforeDefined: '‘{{name}}’ was used before it was defined.'
		}
	}
}