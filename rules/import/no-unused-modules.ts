export const importNoUnusedModules = {
	id: 'import/no-unused-modules',
	key: 'no-unused-modules',
	namespace: 'import',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/no-unused-modules.md'
		},
		schema: [
			{
				properties: {
					src: {
						description: 'files/paths to be analyzed (only for unused exports)',
						type: 'array',
						minItems: 1,
						items: {
							type: 'string',
							minLength: 1
						}
					},
					ignoreExports: {
						description: 'files/paths for which unused exports will not be reported (e.g module entry points)',
						type: 'array',
						minItems: 1,
						items: {
							type: 'string',
							minLength: 1
						}
					},
					missingExports: {
						description: 'report modules without any exports',
						type: 'boolean'
					},
					unusedExports: {
						description: 'report exports without any usage',
						type: 'boolean'
					}
				},
				not: {
					properties: {
						unusedExports: {
							enum: [
								false
							]
						},
						missingExports: {
							enum: [
								false
							]
						}
					}
				},
				anyOf: [
					{
						not: {
							properties: {
								unusedExports: {
									enum: [
										true
									]
								}
							}
						},
						required: [
							'missingExports'
						]
					},
					{
						not: {
							properties: {
								missingExports: {
									enum: [
										true
									]
								}
							}
						},
						required: [
							'unusedExports'
						]
					},
					{
						properties: {
							unusedExports: {
								enum: [
									true
								]
							}
						},
						required: [
							'unusedExports'
						]
					},
					{
						properties: {
							missingExports: {
								enum: [
									true
								]
							}
						},
						required: [
							'missingExports'
						]
					}
				]
			}
		]
	}
}