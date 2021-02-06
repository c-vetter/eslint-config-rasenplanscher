'use strict'

const configuration = {
	ruleId: 'indent',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: true,
	options: [
		'tab',
		{
			SwitchCase: 1,
			VariableDeclarator: 0,
			outerIIFEBody: 1,
			MemberExpression: 0,
			FunctionDeclaration: {
				parameters: 1,
				body: 1,
			},
			FunctionExpression: {
				parameters: 1,
				body: 1,
			},
			CallExpression: {
				arguments: 1,
			},
			ArrayExpression: 1,
			ObjectExpression: 1,
			ImportDeclaration: 1,
			flatTernaryExpressions: undefined,
			offsetTernaryExpressions: undefined,
			ignoredNodes: [
				'ConditionalExpression',
			],
			ignoreComments: false,
		},
	],
}

const configuration$1 = {
	ruleId: 'no-mixed-spaces-and-tabs',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: ['smart-tabs'],
}

const configuration$2 = {
	ruleId: 'semi-style',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: true,
	options: [
		'first',
	],
}

const configuration$3 = {
	ruleId: 'semi',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: [
		'never',
		{
			beforeStatementContinuationChars: 'never',
		},
	],
}

const _eslint_ = [
	configuration,
	configuration$1,
	configuration$2,
	configuration$3
]

const rulesConfigurations = [
	..._eslint_
]

const providers = {
	'eslint': canRequire('eslint'),
	'@typescript-eslint/eslint-plugin': canRequire('@typescript-eslint/eslint-plugin'),
	'eslint-plugin-import': canRequire('eslint-plugin-import'),
	'eslint-plugin-jsdoc': canRequire('eslint-plugin-jsdoc'),
	'eslint-plugin-react': canRequire('eslint-plugin-react'),
	'eslint-plugin-react-hooks': canRequire('eslint-plugin-react-hooks'),
	'eslint-plugin-regex': canRequire('eslint-plugin-regex'),
	'eslint-plugin-typescript-custom-sort-keys': canRequire('eslint-plugin-typescript-custom-sort-keys'),
	'eslint-plugin-unused-imports': canRequire('eslint-plugin-unused-imports'),
}
function canRequire(id) {
	try {
		require.resolve(id)
	}
	catch (error) {
		if (typeof error === 'string')
			throw new Error(error)
		if (error.message.includes('Cannot find module'))
			return false
		throw error
	}
	return true
}

function makeEslintrc(...priorities) {
	return {
		rules: (rulesConfigurations
		.filter((config => !config.ignore))
		.filter(config => priorities.includes(config.priority))
		.filter(config => providers[config.providerId])
		.reduce((r, config) => ({
			...r,
			[config.ruleId]: (config.activate
                ? ['error', ...config.options]
                : 'off')
		}), {})),
	}
}

const IMPORTANT = 'IMPORTANT'

const eslintrc_important = makeEslintrc(IMPORTANT)

module.exports = eslintrc_important
