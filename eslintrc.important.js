'use strict'

const configuration$o = {
	ruleId: 'array-element-newline',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: false,
}

const configuration$n = {
	ruleId: 'camelcase',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: false,
}

const configuration$m = {
	ruleId: 'consistent-return',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [{
		treatUndefinedAsUnspecified: false,
	}],
}

const configuration$l = {
	ruleId: 'id-match',
	providerId: 'eslint',
	ignore: true,
}

const configuration$k = {
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

const configuration$j = {
	ruleId: 'lines-between-class-members',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: true,
	options: ['always'],
}

const configuration$i = {
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

const configuration$h = {
	ruleId: 'no-case-declarations',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$g = {
	ruleId: 'no-func-assign',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: [],
}

const configuration$f = {
	ruleId: 'no-label-var',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$e = {
	ruleId: 'no-mixed-spaces-and-tabs',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: ['smart-tabs'],
}

const configuration$d = {
	ruleId: 'no-nonoctal-decimal-escape',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$c = {
	ruleId: 'no-restricted-properties',
	providerId: 'eslint',
	ignore: true,
}

const configuration$b = {
	ruleId: 'no-return-assign',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: ['always'],
}

const configuration$a = {
	ruleId: 'no-this-before-super',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: [],
}

const configuration$9 = {
	ruleId: 'no-useless-call',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$8 = {
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

const configuration$7 = {
	ruleId: 'prefer-arrow-callback',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [{
		allowNamedFunctions: false,
		allowUnboundThis: false,
	}],
}

const configuration$6 = {
	ruleId: 'prefer-numeric-literals',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$5 = {
	ruleId: 'prefer-rest-params',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$4 = {
	ruleId: 'prefer-spread',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$3 = {
	ruleId: 'semi-style',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: true,
	options: [
		'first',
	],
}

const configuration$2 = {
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

const configuration$1 = {
	ruleId: 'sort-keys',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: false,
}

const configuration = {
	ruleId: 'space-in-parens',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: true,
	options: ['never'],
}

const _eslint_ = [
	configuration$o,
	configuration$n,
	configuration$m,
	configuration$l,
	configuration$k,
	configuration$j,
	configuration$i,
	configuration$h,
	configuration$g,
	configuration$f,
	configuration$e,
	configuration$d,
	configuration$c,
	configuration$b,
	configuration$a,
	configuration$9,
	configuration$8,
	configuration$7,
	configuration$6,
	configuration$5,
	configuration$4,
	configuration$3,
	configuration$2,
	configuration$1,
	configuration
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

const eslintrc_important = makeEslintrc(IMPORTANT)

module.exports = eslintrc_important
