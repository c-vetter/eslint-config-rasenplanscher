export const noRestrictedImports = {
	id: 'no-restricted-imports',
	key: 'no-restricted-imports',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow specified modules when loaded by `import`',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-restricted-imports'
		},
		messages: {
			path: '‘{{importSource}}’ import is restricted from being used.',
			pathWithCustomMessage: '‘{{importSource}}’ import is restricted from being used. {{customMessage}}',
			patterns: '‘{{importSource}}’ import is restricted from being used by a pattern.',
			everything: '* import is invalid because ‘{{importNames}}’ from ‘{{importSource}}’ is restricted.',
			everythingWithCustomMessage: '* import is invalid because ‘{{importNames}}’ from ‘{{importSource}}’ is restricted. {{customMessage}}',
			importName: '‘{{importName}}’ import from ‘{{importSource}}’ is restricted.',
			importNameWithCustomMessage: '‘{{importName}}’ import from ‘{{importSource}}’ is restricted. {{customMessage}}'
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
									},
									importNames: {
										type: 'array',
										items: {
											type: 'string'
										}
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
					items: [
						{
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
													},
													importNames: {
														type: 'array',
														items: {
															type: 'string'
														}
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
						}
					],
					additionalItems: false
				}
			]
		}
	}
}