export const reactJsxCurlySpacing = {
	id: 'react/jsx-curly-spacing',
	key: 'jsx-curly-spacing',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Enforce or disallow spaces inside of curly braces in JSX attributes',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-curly-spacing.md'
		},
		fixable: 'code',
		schema: {
			definitions: {
				basicConfig: {
					type: 'object',
					properties: {
						when: {
							enum: [
								'always',
								'never'
							]
						},
						allowMultiline: {
							type: 'boolean'
						},
						spacing: {
							type: 'object',
							properties: {
								objectLiterals: {
									enum: [
										'always',
										'never'
									]
								}
							}
						}
					}
				},
				basicConfigOrBoolean: {
					oneOf: [
						{
							'$ref': '#/definitions/basicConfig'
						},
						{
							type: 'boolean'
						}
					]
				}
			},
			type: 'array',
			items: [
				{
					oneOf: [
						{
							allOf: [
								{
									'$ref': '#/definitions/basicConfig'
								},
								{
									type: 'object',
									properties: {
										attributes: {
											'$ref': '#/definitions/basicConfigOrBoolean'
										},
										children: {
											'$ref': '#/definitions/basicConfigOrBoolean'
										}
									}
								}
							]
						},
						{
							enum: [
								'always',
								'never'
							]
						}
					]
				},
				{
					type: 'object',
					properties: {
						allowMultiline: {
							type: 'boolean'
						},
						spacing: {
							type: 'object',
							properties: {
								objectLiterals: {
									enum: [
										'always',
										'never'
									]
								}
							}
						}
					},
					additionalProperties: false
				}
			]
		}
	}
}