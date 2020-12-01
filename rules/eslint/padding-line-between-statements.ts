export const paddingLineBetweenStatements = {
	id: 'padding-line-between-statements',
	key: 'padding-line-between-statements',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'require or disallow padding lines between statements',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/padding-line-between-statements'
		},
		fixable: 'whitespace',
		schema: {
			definitions: {
				paddingType: {
					enum: [
						'any',
						'never',
						'always'
					]
				},
				statementType: {
					anyOf: [
						{
							enum: [
								'*',
								'block-like',
								'cjs-export',
								'cjs-import',
								'directive',
								'expression',
								'iife',
								'multiline-block-like',
								'multiline-expression',
								'multiline-const',
								'multiline-let',
								'multiline-var',
								'singleline-const',
								'singleline-let',
								'singleline-var',
								'block',
								'empty',
								'function',
								'break',
								'case',
								'class',
								'const',
								'continue',
								'debugger',
								'default',
								'do',
								'export',
								'for',
								'if',
								'import',
								'let',
								'return',
								'switch',
								'throw',
								'try',
								'var',
								'while',
								'with'
							]
						},
						{
							type: 'array',
							items: {
								enum: [
									'*',
									'block-like',
									'cjs-export',
									'cjs-import',
									'directive',
									'expression',
									'iife',
									'multiline-block-like',
									'multiline-expression',
									'multiline-const',
									'multiline-let',
									'multiline-var',
									'singleline-const',
									'singleline-let',
									'singleline-var',
									'block',
									'empty',
									'function',
									'break',
									'case',
									'class',
									'const',
									'continue',
									'debugger',
									'default',
									'do',
									'export',
									'for',
									'if',
									'import',
									'let',
									'return',
									'switch',
									'throw',
									'try',
									'var',
									'while',
									'with'
								]
							},
							minItems: 1,
							uniqueItems: true,
							additionalItems: false
						}
					]
				}
			},
			type: 'array',
			items: {
				type: 'object',
				properties: {
					blankLine: {
						'$ref': '#/definitions/paddingType'
					},
					prev: {
						'$ref': '#/definitions/statementType'
					},
					next: {
						'$ref': '#/definitions/statementType'
					}
				},
				additionalProperties: false,
				required: [
					'blankLine',
					'prev',
					'next'
				]
			},
			additionalItems: false
		},
		messages: {
			unexpectedBlankLine: 'Unexpected blank line before this statement.',
			expectedBlankLine: 'Expected blank line before this statement.'
		}
	}
}