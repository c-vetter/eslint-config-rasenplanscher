export const reactJsxNoBind = {
	id: 'react/jsx-no-bind',
	key: 'jsx-no-bind',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Prevents usage of Function.prototype.bind and arrow functions in React component props',
			category: 'Best Practices',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-bind.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowArrowFunctions: {
						default: false,
						type: 'boolean'
					},
					allowBind: {
						default: false,
						type: 'boolean'
					},
					allowFunctions: {
						default: false,
						type: 'boolean'
					},
					ignoreRefs: {
						default: false,
						type: 'boolean'
					},
					ignoreDOMComponents: {
						default: false,
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}