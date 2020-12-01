export const importExtensions = {
	id: 'import/extensions',
	key: 'extensions',
	namespace: 'import',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/extensions.md'
		},
		schema: {
			anyOf: [
				{
					type: 'array',
					items: [
						{
							enum: [
								'always',
								'ignorePackages',
								'never'
							]
						}
					],
					additionalItems: false
				},
				{
					type: 'array',
					items: [
						{
							enum: [
								'always',
								'ignorePackages',
								'never'
							]
						},
						{
							type: 'object',
							properties: {
								pattern: {
									type: 'object',
									patternProperties: {
										'.*': {
											enum: [
												'always',
												'ignorePackages',
												'never'
											]
										}
									}
								},
								ignorePackages: {
									type: 'boolean'
								}
							}
						}
					],
					additionalItems: false
				},
				{
					type: 'array',
					items: [
						{
							type: 'object',
							properties: {
								pattern: {
									type: 'object',
									patternProperties: {
										'.*': {
											enum: [
												'always',
												'ignorePackages',
												'never'
											]
										}
									}
								},
								ignorePackages: {
									type: 'boolean'
								}
							}
						}
					],
					additionalItems: false
				},
				{
					type: 'array',
					items: [
						{
							type: 'object',
							patternProperties: {
								'.*': {
									enum: [
										'always',
										'ignorePackages',
										'never'
									]
								}
							}
						}
					],
					additionalItems: false
				},
				{
					type: 'array',
					items: [
						{
							enum: [
								'always',
								'ignorePackages',
								'never'
							]
						},
						{
							type: 'object',
							patternProperties: {
								'.*': {
									enum: [
										'always',
										'ignorePackages',
										'never'
									]
								}
							}
						}
					],
					additionalItems: false
				}
			]
		}
	}
}