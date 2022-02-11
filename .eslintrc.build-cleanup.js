const DEACTIVATE = `off`

module.exports = {
	// non-fixable rules that don't help when applied after transpilation and bundling
	rules: {
		"@typescript-eslint/strict-boolean-expressions": DEACTIVATE,
		"@typescript-eslint/no-magic-numbers": DEACTIVATE,
		"@typescript-eslint/no-shadow": DEACTIVATE,
	},
}
