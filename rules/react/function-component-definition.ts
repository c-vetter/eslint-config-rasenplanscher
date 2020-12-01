export const reactFunctionComponentDefinition = {
	id: 'react/function-component-definition',
	key: 'function-component-definition',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Standardize the way function component get defined',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/function-component-definition.md'
		},
		fixable: 'code',
		schema: [
			{
				type: 'object',
				properties: {
					namedComponents: {
						enum: [
							'function-declaration',
							'arrow-function',
							'function-expression'
						]
					},
					unnamedComponents: {
						enum: [
							'arrow-function',
							'function-expression'
						]
					}
				}
			}
		]
	}
}