export const jsdocCheckExamples = {
	id: 'jsdoc/check-examples',
	key: 'check-examples',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples'
		},
		schema: [
			{
				additionalProperties: false,
				properties: {
					allowInlineConfig: {
						default: true,
						type: 'boolean'
					},
					baseConfig: {
						type: 'object'
					},
					captionRequired: {
						default: false,
						type: 'boolean'
					},
					checkDefaults: {
						default: false,
						type: 'boolean'
					},
					checkEslintrc: {
						default: true,
						type: 'boolean'
					},
					checkParams: {
						default: false,
						type: 'boolean'
					},
					checkProperties: {
						default: false,
						type: 'boolean'
					},
					configFile: {
						type: 'string'
					},
					exampleCodeRegex: {
						type: 'string'
					},
					matchingFileName: {
						type: 'string'
					},
					matchingFileNameDefaults: {
						type: 'string'
					},
					matchingFileNameParams: {
						type: 'string'
					},
					matchingFileNameProperties: {
						type: 'string'
					},
					noDefaultExampleRules: {
						default: false,
						type: 'boolean'
					},
					paddedIndent: {
						default: 0,
						type: 'integer'
					},
					rejectExampleCodeRegex: {
						type: 'string'
					},
					reportUnusedDisableDirectives: {
						default: true,
						type: 'boolean'
					}
				},
				type: 'object'
			}
		],
		type: 'suggestion'
	}
}