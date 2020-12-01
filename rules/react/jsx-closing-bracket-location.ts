export const reactJsxClosingBracketLocation = {
	id: 'react/jsx-closing-bracket-location',
	key: 'jsx-closing-bracket-location',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Validate closing bracket location in JSX',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-closing-bracket-location.md'
		},
		fixable: 'code',
		schema: [
			{
				oneOf: [
					{
						enum: [
							'after-props',
							'props-aligned',
							'tag-aligned',
							'line-aligned'
						]
					},
					{
						type: 'object',
						properties: {
							location: {
								enum: [
									'after-props',
									'props-aligned',
									'tag-aligned',
									'line-aligned'
								]
							}
						},
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							nonEmpty: {
								enum: [
									'after-props',
									'props-aligned',
									'tag-aligned',
									'line-aligned',
									false
								]
							},
							selfClosing: {
								enum: [
									'after-props',
									'props-aligned',
									'tag-aligned',
									'line-aligned',
									false
								]
							}
						},
						additionalProperties: false
					}
				]
			}
		]
	}
}