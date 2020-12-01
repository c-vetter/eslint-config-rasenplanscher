export const noRestrictedModules = {
	id: 'no-restricted-modules',
	key: 'no-restricted-modules',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		deprecated: true,
		replacedBy: [],
		type: 'suggestion',
		docs: {
			description: 'disallow specified modules when loaded by `require`',
			category: 'Node.js and CommonJS',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-restricted-modules'
		},
		schema: {
			anyOf: [
				{
					type: 'array',
					items: {
						anyOf: [
							{
								type: 'string'
							},
							{
								type: 'object',
								properties: {
									name: {
										type: 'string'
									},
									message: {
										type: 'string',
										minLength: 1
									}
								},
								additionalProperties: false,
								required: [
									'name'
								]
							}
						]
					},
					uniqueItems: true
				},
				{
					type: 'array',
					items: {
						type: 'object',
						properties: {
							paths: {
								type: 'array',
								items: {
									anyOf: [
										{
											type: 'string'
										},
										{
											type: 'object',
											properties: {
												name: {
													type: 'string'
												},
												message: {
													type: 'string',
													minLength: 1
												}
											},
											additionalProperties: false,
											required: [
												'name'
											]
										}
									]
								},
								uniqueItems: true
							},
							patterns: {
								type: 'array',
								items: {
									type: 'string'
								},
								uniqueItems: true
							}
						},
						additionalProperties: false
					},
					additionalItems: false
				}
			]
		},
		messages: {
			defaultMessage: '‘{{name}}’ module is restricted from being used.',
			customMessage: '‘{{name}}’ module is restricted from being used. {{customMessage}}',
			patternMessage: '‘{{name}}’ module is restricted from being used by a pattern.'
		}
	}
}