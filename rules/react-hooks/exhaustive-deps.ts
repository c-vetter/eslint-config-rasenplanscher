export const reactHooksExhaustiveDeps = {
	id: 'react-hooks/exhaustive-deps',
	key: 'exhaustive-deps',
	namespace: 'react-hooks',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'verifies the list of dependencies for Hooks like useEffect and similar',
			category: 'Best Practices',
			recommended: true,
			url: 'https://github.com/facebook/react/issues/14920'
		},
		fixable: 'code',
		schema: [
			{
				type: 'object',
				additionalProperties: false,
				enableDangerousAutofixThisMayCauseInfiniteLoops: false,
				properties: {
					additionalHooks: {
						type: 'string'
					},
					enableDangerousAutofixThisMayCauseInfiniteLoops: {
						type: 'boolean'
					}
				}
			}
		]
	}
}