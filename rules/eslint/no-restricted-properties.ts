export const noRestrictedProperties = {
	id: 'no-restricted-properties',
	key: 'no-restricted-properties',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow certain properties on certain objects',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-restricted-properties'
		},
		schema: {
			type: 'array',
			items: {
				anyOf: [
					{
						type: 'object',
						properties: {
							object: {
								type: 'string'
							},
							property: {
								type: 'string'
							},
							message: {
								type: 'string'
							}
						},
						additionalProperties: false,
						required: [
							'object'
						]
					},
					{
						type: 'object',
						properties: {
							object: {
								type: 'string'
							},
							property: {
								type: 'string'
							},
							message: {
								type: 'string'
							}
						},
						additionalProperties: false,
						required: [
							'property'
						]
					}
				]
			},
			uniqueItems: true
		},
		messages: {
			restrictedObjectProperty: '‘{{objectName}}.{{propertyName}}’ is restricted from being used.{{message}}',
			restrictedProperty: '‘{{propertyName}}’ is restricted from being used.{{message}}'
		}
	}
}