export const reactJsxPropsNoSpreading = {
	id: 'react/jsx-props-no-spreading',
	key: 'jsx-props-no-spreading',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Prevent JSX prop spreading',
			category: 'Best Practices',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-spreading.md'
		},
		schema: [
			{
				allOf: [
					{
						type: 'object',
						properties: {
							html: {
								enum: [
									'enforce',
									'ignore'
								]
							},
							custom: {
								enum: [
									'enforce',
									'ignore'
								]
							},
							exceptions: {
								type: 'array',
								items: {
									type: 'string',
									uniqueItems: true
								}
							}
						}
					},
					{
						not: {
							type: 'object',
							required: [
								'html',
								'custom'
							],
							properties: {
								html: {
									enum: [
										'ignore'
									]
								},
								custom: {
									enum: [
										'ignore'
									]
								},
								exceptions: {
									type: 'array',
									minItems: 0,
									maxItems: 0
								}
							}
						}
					}
				]
			}
		]
	}
}