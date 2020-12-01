export const typescriptEslintExplicitModuleBoundaryTypes = {
	id: '@typescript-eslint/explicit-module-boundary-types',
	key: 'explicit-module-boundary-types',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Require explicit return and argument types on exported functions‘ and classes’ public class methods',
			category: 'Stylistic Issues',
			recommended: 'warn',
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md'
		},
		messages: {
			missingReturnType: 'Missing return type on function.',
			missingArgType: 'Argument ‘{{name}}’ should be typed.',
			missingArgTypeUnnamed: '{{type}} argument should be typed.',
			anyTypedArg: 'Argument ‘{{name}}’ should be typed with a non-any type.',
			anyTypedArgUnnamed: '{{type}} argument should be typed with a non-any type.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowArgumentsExplicitlyTypedAsAny: {
						type: 'boolean'
					},
					allowDirectConstAssertionInArrowFunctions: {
						type: 'boolean'
					},
					allowedNames: {
						type: 'array',
						items: {
							type: 'string'
						}
					},
					allowHigherOrderFunctions: {
						type: 'boolean'
					},
					allowTypedFunctionExpressions: {
						type: 'boolean'
					},
					shouldTrackReferences: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}