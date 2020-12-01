export const reactJsxHandlerNames = {
	id: 'react/jsx-handler-names',
	key: 'jsx-handler-names',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Enforce event handler naming conventions in JSX',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-handler-names.md'
		},
		schema: [
			{
				anyOf: [
					{
						type: 'object',
						properties: {
							eventHandlerPrefix: {
								type: 'string'
							},
							eventHandlerPropPrefix: {
								type: 'string'
							},
							checkLocalVariables: {
								type: 'boolean'
							},
							checkInlineFunction: {
								type: 'boolean'
							}
						},
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							eventHandlerPrefix: {
								type: 'string'
							},
							eventHandlerPropPrefix: {
								type: 'boolean',
								enum: [
									false
								]
							},
							checkLocalVariables: {
								type: 'boolean'
							},
							checkInlineFunction: {
								type: 'boolean'
							}
						},
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							eventHandlerPrefix: {
								type: 'boolean',
								enum: [
									false
								]
							},
							eventHandlerPropPrefix: {
								type: 'string'
							},
							checkLocalVariables: {
								type: 'boolean'
							},
							checkInlineFunction: {
								type: 'boolean'
							}
						},
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							checkLocalVariables: {
								type: 'boolean'
							}
						},
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							checkInlineFunction: {
								type: 'boolean'
							}
						},
						additionalProperties: false
					}
				]
			}
		]
	}
}