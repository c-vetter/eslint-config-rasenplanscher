module.exports = require('eslint-config-rasenplanscher/eslintrc.make')({
	priorities: [ 'IMPORTANT', 'HELPFUL', 'TASTE' ],
	dangerzone: [ 'curly' ],
	overrides: {
		root: true,
		parserOptions: {
			ecmaVersion: 2021,
		},
	},
})
