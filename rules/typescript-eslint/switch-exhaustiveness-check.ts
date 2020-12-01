export const typescriptEslintSwitchExhaustivenessCheck = {
	id: '@typescript-eslint/switch-exhaustiveness-check',
	key: 'switch-exhaustiveness-check',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Exhaustiveness checking in switch with union type',
			category: 'Best Practices',
			recommended: false,
			suggestion: true,
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md'
		},
		schema: [],
		messages: {
			switchIsNotExhaustive: 'Switch is not exhaustive. Cases not matched: {{missingBranches}}',
			addMissingCases: 'Add branches for missing cases.'
		}
	}
}