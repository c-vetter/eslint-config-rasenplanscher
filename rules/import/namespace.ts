export const importNamespace = {
	id: 'import/namespace',
	key: 'namespace',
	namespace: 'import',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/namespace.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowComputed: {
						description: 'If `false`, will report computed (and thus, un-lintable) references to namespace members.',
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		]
	}
}