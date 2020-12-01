export const oneVar = {
	id: 'one-var',
	key: 'one-var',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce variables to be declared either together or separately in functions',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/one-var'
		},
		fixable: 'code',
		schema: [
			{
				oneOf: [
					{
						enum: [
							'always',
							'never',
							'consecutive'
						]
					},
					{
						type: 'object',
						properties: {
							separateRequires: {
								type: 'boolean'
							},
							var: {
								enum: [
									'always',
									'never',
									'consecutive'
								]
							},
							let: {
								enum: [
									'always',
									'never',
									'consecutive'
								]
							},
							const: {
								enum: [
									'always',
									'never',
									'consecutive'
								]
							}
						},
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							initialized: {
								enum: [
									'always',
									'never',
									'consecutive'
								]
							},
							uninitialized: {
								enum: [
									'always',
									'never',
									'consecutive'
								]
							}
						},
						additionalProperties: false
					}
				]
			}
		],
		messages: {
			combineUninitialized: 'Combine this with the previous ‘{{type}}’ statement with uninitialized variables.',
			combineInitialized: 'Combine this with the previous ‘{{type}}’ statement with initialized variables.',
			splitUninitialized: 'Split uninitialized ‘{{type}}’ declarations into multiple statements.',
			splitInitialized: 'Split initialized ‘{{type}}’ declarations into multiple statements.',
			splitRequires: 'Split requires to be separated into a single block.',
			combine: 'Combine this with the previous ‘{{type}}’ statement.',
			split: 'Split ‘{{type}}’ declarations into multiple statements.'
		}
	}
}