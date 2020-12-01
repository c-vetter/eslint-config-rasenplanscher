export const reactJsxNoScriptUrl = {
	id: 'react/jsx-no-script-url',
	key: 'jsx-no-script-url',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Forbid `javascript:` URLs',
			category: 'Best Practices',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-script-url.md'
		},
		schema: [
			{
				type: 'array',
				uniqueItems: true,
				items: {
					type: 'object',
					properties: {
						name: {
							type: 'string'
						},
						props: {
							type: 'array',
							items: {
								type: 'string',
								uniqueItems: true
							}
						}
					},
					required: [
						'name',
						'props'
					],
					additionalProperties: false
				}
			}
		]
	}
}