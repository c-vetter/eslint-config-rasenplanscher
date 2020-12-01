export const quoteProps = {
	id: 'quote-props',
	key: 'quote-props',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require quotes around object literal property names',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/quote-props'
		},
		schema: {
			anyOf: [
				{
					type: 'array',
					items: [
						{
							enum: [
								'always',
								'as-needed',
								'consistent',
								'consistent-as-needed'
							]
						}
					],
					minItems: 0,
					maxItems: 1
				},
				{
					type: 'array',
					items: [
						{
							enum: [
								'always',
								'as-needed',
								'consistent',
								'consistent-as-needed'
							]
						},
						{
							type: 'object',
							properties: {
								keywords: {
									type: 'boolean'
								},
								unnecessary: {
									type: 'boolean'
								},
								numbers: {
									type: 'boolean'
								}
							},
							additionalProperties: false
						}
					],
					minItems: 0,
					maxItems: 2
				}
			]
		},
		fixable: 'code',
		messages: {
			requireQuotesDueToReservedWord: 'Properties should be quoted as ‘{{property}}’ is a reserved word.',
			inconsistentlyQuotedProperty: 'Inconsistently quoted property ‘{{key}}’ found.',
			unnecessarilyQuotedProperty: 'Unnecessarily quoted property ‘{{property}}’ found.',
			unquotedReservedProperty: 'Unquoted reserved word ‘{{property}}’ used as key.',
			unquotedNumericProperty: 'Unquoted number literal ‘{{property}}’ used as key.',
			unquotedPropertyFound: 'Unquoted property ‘{{property}}’ found.',
			redundantQuoting: 'Properties shouldn't be quoted as all quotes are redundant.'
		}
	}
}