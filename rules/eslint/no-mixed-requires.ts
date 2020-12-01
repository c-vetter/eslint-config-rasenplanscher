export const noMixedRequires = {
	id: 'no-mixed-requires',
	key: 'no-mixed-requires',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		deprecated: true,
		replacedBy: [],
		type: 'suggestion',
		docs: {
			description: 'disallow `require` calls to be mixed with regular variable declarations',
			category: 'Node.js and CommonJS',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-mixed-requires'
		},
		schema: [
			{
				oneOf: [
					{
						type: 'boolean'
					},
					{
						type: 'object',
						properties: {
							grouping: {
								type: 'boolean'
							},
							allowCall: {
								type: 'boolean'
							}
						},
						additionalProperties: false
					}
				]
			}
		],
		messages: {
			noMixRequire: 'Do not mix ‘require’ and other declarations.',
			noMixCoreModuleFileComputed: 'Do not mix core, module, file and computed requires.'
		}
	}
}