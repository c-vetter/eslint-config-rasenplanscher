export const useIsnan = {
	id: 'use-isnan',
	key: 'use-isnan',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'require calls to `isNaN()` when checking for `NaN`',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/use-isnan'
		},
		schema: [
			{
				type: 'object',
				properties: {
					enforceForSwitchCase: {
						type: 'boolean',
						default: true
					},
					enforceForIndexOf: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			comparisonWithNaN: 'Use the isNaN function to compare with NaN.',
			switchNaN: '‘switch(NaN)’ can never match a case clause. Use Number.isNaN instead of the switch.',
			caseNaN: '‘case NaN’ can never match. Use Number.isNaN before the switch.',
			indexOfNaN: 'Array prototype method ‘{{ methodName }}’ cannot find NaN.'
		}
	}
}