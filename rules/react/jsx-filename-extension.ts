export const reactJsxFilenameExtension = {
	id: 'react/jsx-filename-extension',
	key: 'jsx-filename-extension',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Restrict file extensions that may contain JSX',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allow: {
						enum: [
							'always',
							'as-needed'
						]
					},
					extensions: {
						type: 'array',
						items: {
							type: 'string'
						}
					}
				},
				additionalProperties: false
			}
		]
	}
}