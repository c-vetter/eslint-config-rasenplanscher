'use strict'

const configuration = {
	ruleId: 'camelcase',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: false,
}

const configuration$1 = {
	ruleId: 'id-match',
	providerId: 'eslint',
	ignore: true,
}

const configuration$2 = {
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

const configuration$3 = {
	ruleId: 'lines-between-class-members',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: true,
	options: ['always'],
}

const configuration$4 = {
	ruleId: 'new-cap',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [{
		newIsCap: true,
		capIsNew: true,
		properties: true,
	}],
}

const configuration$5 = {
	ruleId: 'no-case-declarations',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$6 = {
	ruleId: 'no-func-assign',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: [],
}

const configuration$7 = {
	ruleId: 'no-mixed-spaces-and-tabs',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: ['smart-tabs'],
}

const configuration$8 = {
	ruleId: 'no-nonoctal-decimal-escape',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$9 = {
	ruleId: 'no-restricted-properties',
	providerId: 'eslint',
	ignore: true,
}

const configuration$a = {
	ruleId: 'no-return-assign',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: ['always'],
}

const configuration$b = {
	ruleId: 'no-useless-call',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$c = {
	ruleId: 'no-useless-rename',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: [{
		ignoreDestructuring: false,
		ignoreExport: false,
		ignoreImport: false,
	}],
}

const configuration$d = {
	ruleId: 'prefer-arrow-callback',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [{
		allowNamedFunctions: false,
		allowUnboundThis: false,
	}],
}

const configuration$e = {
	ruleId: 'prefer-numeric-literals',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$f = {
	ruleId: 'prefer-rest-params',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$g = {
	ruleId: 'prefer-spread',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$h = {
	ruleId: 'semi-style',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: true,
	options: [
		'first',
	],
}

const configuration$i = {
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

const configuration$j = {
	ruleId: 'sort-keys',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: false,
}

const configuration$k = {
	ruleId: 'space-in-parens',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: true,
	options: ['never'],
}

const _eslint_ = [
	configuration,
	configuration$1,
	configuration$2,
	configuration$3,
	configuration$4,
	configuration$5,
	configuration$6,
	configuration$7,
	configuration$8,
	configuration$9,
	configuration$a,
	configuration$b,
	configuration$c,
	configuration$d,
	configuration$e,
	configuration$f,
	configuration$g,
	configuration$h,
	configuration$i,
	configuration$j,
	configuration$k
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
		.filter(excludeIgnored)
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
function excludeIgnored(config) {
	return !config.ignore
}

const IMPORTANT = 'IMPORTANT'
const HELPFUL = 'HELPFUL'
const TASTE = 'TASTE'

const eslintrc_all = makeEslintrc(IMPORTANT, HELPFUL, TASTE)

module.exports = eslintrc_all
