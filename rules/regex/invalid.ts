export const regexInvalid = {
	id: 'regex/invalid',
	key: 'invalid',
	namespace: 'regex',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Invalid regular expressions to be reported',
			category: 'Stylistic Issues'
		},
		schema: [
			{
				title: 'Invalid regular expressions',
				description: 'Invalid regular expressions settings',
				type: 'array',
				items: {
					oneOf: [
						{
							title: 'Invalid pattern',
							description: 'Invalid pattern to be reported',
							type: 'string',
							minLength: 1
						},
						{
							title: 'Invalid detailed pattern',
							description: 'Invalid pattern to be looked with possible custom message, custom ignored file pattern and custom inspect file pattern',
							type: 'object',
							properties: {
								id: {
									title: 'Invalid pattern Id',
									description: 'Invalid pattern Id to be reported',
									type: 'string',
									minLength: 2
								},
								regex: {
									title: 'Invalid pattern',
									description: 'Invalid regular expression to look for',
									type: 'string',
									minLength: 1
								},
								message: {
									title: 'Invalid message',
									description: 'Message to be shown when Invalid pattern is found',
									type: 'string',
									minLength: 3
								},
								files: {
									type: 'object',
									properties: {
										ignore: {
											title: 'Ignore file pattern',
											description: 'Regular expression of the files to be ignored when validating this specific pattern',
											type: 'string',
											minLength: 2
										},
										inspect: {
											title: 'Inspect file pattern',
											description: 'Regular expression of the files to be inspected when validating this specific pattern',
											type: 'string',
											minLength: 2
										}
									},
									minProperties: 1,
									maxProperties: 1
								}
							},
							required: [
								'regex'
							]
						}
					]
				},
				minItems: 1
			},
			{
				title: 'Ignore file pattern',
				description: 'Regular expressions of the files to be ignored when validating all the defined patterns',
				type: 'string',
				minLength: 2
			}
		]
	}
}