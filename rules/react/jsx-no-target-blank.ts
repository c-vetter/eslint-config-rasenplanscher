export const reactJsxNoTargetBlank = {
	id: 'react/jsx-no-target-blank',
	key: 'jsx-no-target-blank',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Forbid `target=“_blank”` attribute without `rel=“noreferrer”`',
			category: 'Best Practices',
			recommended: true,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-target-blank.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowReferrer: {
						type: 'boolean'
					},
					enforceDynamicLinks: {
						enum: [
							'always',
							'never'
						]
					}
				},
				additionalProperties: false
			}
		]
	}
}