export const reactStaticPropertyPlacement = {
	id: 'react/static-property-placement',
	key: 'static-property-placement',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Defines where React component static properties should be positioned.',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/static-property-placement.md'
		},
		fixable: null,
		schema: [
			{
				enum: [
					'static public field',
					'static getter',
					'property assignment'
				]
			},
			{
				type: 'object',
				properties: {
					propTypes: {
						enum: [
							'static public field',
							'static getter',
							'property assignment'
						]
					},
					defaultProps: {
						enum: [
							'static public field',
							'static getter',
							'property assignment'
						]
					},
					childContextTypes: {
						enum: [
							'static public field',
							'static getter',
							'property assignment'
						]
					},
					contextTypes: {
						enum: [
							'static public field',
							'static getter',
							'property assignment'
						]
					},
					contextType: {
						enum: [
							'static public field',
							'static getter',
							'property assignment'
						]
					},
					displayName: {
						enum: [
							'static public field',
							'static getter',
							'property assignment'
						]
					}
				},
				additionalProperties: false
			}
		]
	}
}