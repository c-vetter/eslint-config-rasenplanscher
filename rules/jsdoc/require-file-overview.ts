export const jsdocRequireFileOverview = {
	id: 'jsdoc/require-file-overview',
	key: 'require-file-overview',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Checks that all files have one `@file`, `@fileoverview`, or `@overview` tag at the beginning of the file.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-file-overview'
		},
		schema: [
			{
				additionalProperties: false,
				properties: {
					tags: {
						patternProperties: {
							'.*': {
								additionalProperties: false,
								properties: {
									initialCommentsOnly: {
										type: 'boolean'
									},
									mustExist: {
										type: 'boolean'
									},
									preventDuplicates: {
										type: 'boolean'
									}
								},
								type: 'object'
							}
						},
						type: 'object'
					}
				},
				type: 'object'
			}
		],
		type: 'suggestion'
	}
}