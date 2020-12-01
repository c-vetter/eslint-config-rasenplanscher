export const jsdocRequireDescriptionCompleteSentence = {
	id: 'jsdoc/require-description-complete-sentence',
	key: 'require-description-complete-sentence',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Requires that block description, explicit `@description`, and `@param`/`@returns` tag descriptions are written in complete sentences.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description-complete-sentence'
		},
		fixable: 'code',
		schema: [
			{
				additionalProperties: false,
				properties: {
					abbreviations: {
						items: {
							type: 'string'
						},
						type: 'array'
					},
					newlineBeforeCapsAssumesBadSentenceEnd: {
						type: 'boolean'
					},
					tags: {
						items: {
							type: 'string'
						},
						type: 'array'
					}
				},
				type: 'object'
			}
		],
		type: 'suggestion'
	}
}