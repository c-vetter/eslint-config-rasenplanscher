export const reactJsxWrapMultilines = {
	id: 'react/jsx-wrap-multilines',
	key: 'jsx-wrap-multilines',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Prevent missing parentheses around multilines JSX',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-wrap-multilines.md'
		},
		fixable: 'code',
		schema: [
			{
				type: 'object',
				properties: {
					declaration: {
						enum: [
							true,
							false,
							'ignore',
							'parens',
							'parens-new-line'
						]
					},
					assignment: {
						enum: [
							true,
							false,
							'ignore',
							'parens',
							'parens-new-line'
						]
					},
					return: {
						enum: [
							true,
							false,
							'ignore',
							'parens',
							'parens-new-line'
						]
					},
					arrow: {
						enum: [
							true,
							false,
							'ignore',
							'parens',
							'parens-new-line'
						]
					},
					condition: {
						enum: [
							true,
							false,
							'ignore',
							'parens',
							'parens-new-line'
						]
					},
					logical: {
						enum: [
							true,
							false,
							'ignore',
							'parens',
							'parens-new-line'
						]
					},
					prop: {
						enum: [
							true,
							false,
							'ignore',
							'parens',
							'parens-new-line'
						]
					}
				},
				additionalProperties: false
			}
		]
	}
}