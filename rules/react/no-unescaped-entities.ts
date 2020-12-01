export const reactNoUnescapedEntities = {
	id: 'react/no-unescaped-entities',
	key: 'no-unescaped-entities',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Detect unescaped HTML entities, which might represent malformed tags',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unescaped-entities.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					forbid: {
						type: 'array',
						items: {
							oneOf: [
								{
									type: 'string'
								},
								{
									type: 'object',
									properties: {
										char: {
											type: 'string'
										},
										alternatives: {
											type: 'array',
											uniqueItems: true,
											items: {
												type: 'string'
											}
										}
									}
								}
							]
						}
					}
				},
				additionalProperties: false
			}
		]
	}
}