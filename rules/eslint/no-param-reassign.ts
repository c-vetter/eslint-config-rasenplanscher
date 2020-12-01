export const noParamReassign = {
	id: 'no-param-reassign',
	key: 'no-param-reassign',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow reassigning `function` parameters',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-param-reassign'
		},
		schema: [
			{
				oneOf: [
					{
						type: 'object',
						properties: {
							props: {
								enum: [
									false
								]
							}
						},
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							props: {
								enum: [
									true
								]
							},
							ignorePropertyModificationsFor: {
								type: 'array',
								items: {
									type: 'string'
								},
								uniqueItems: true
							},
							ignorePropertyModificationsForRegex: {
								type: 'array',
								items: {
									type: 'string'
								},
								uniqueItems: true
							}
						},
						additionalProperties: false
					}
				]
			}
		],
		messages: {
			assignmentToFunctionParam: 'Assignment to function parameter ‘{{name}}’.',
			assignmentToFunctionParamProp: 'Assignment to property of function parameter ‘{{name}}’.'
		}
	}
}