'use strict'

const configuration$q = {
	id: 'array-element-newline',
	ruleId: 'array-element-newline',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: false,
}

const configuration$p = {
	id: 'camelcase',
	ruleId: 'camelcase',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: false,
}

const configuration$o = {
	id: 'consistent-return',
	ruleId: 'consistent-return',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [{
		treatUndefinedAsUnspecified: false,
	}],
}

const configuration$n = {
	id: 'curly',
	ruleId: 'curly',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: [
		'all',
	],
	optionsDangerzone: [
		'multi-line',
		'consistent',
	],
}

const configuration$m = {
	id: 'id-match',
	ruleId: 'id-match',
	providerId: 'eslint',
	ignore: true,
}

const configuration$l = {
	id: 'indent',
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

const configuration$k = {
	id: 'lines-between-class-members',
	ruleId: 'lines-between-class-members',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: true,
	options: ['always'],
}

const configuration$j = {
	id: 'new-cap',
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

const configuration$i = {
	id: 'no-case-declarations',
	ruleId: 'no-case-declarations',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$h = {
	id: 'no-func-assign',
	ruleId: 'no-func-assign',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: [],
}

const configuration$g = {
	id: 'no-label-var',
	ruleId: 'no-label-var',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$f = {
	id: 'no-mixed-spaces-and-tabs',
	ruleId: 'no-mixed-spaces-and-tabs',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: ['smart-tabs'],
}

const configuration$e = {
	id: 'no-nonoctal-decimal-escape',
	ruleId: 'no-nonoctal-decimal-escape',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$d = {
	id: 'no-restricted-properties',
	ruleId: 'no-restricted-properties',
	providerId: 'eslint',
	ignore: true,
}

const configuration$c = {
	id: 'no-return-assign',
	ruleId: 'no-return-assign',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: ['always'],
}

const configuration$b = {
	id: 'no-this-before-super',
	ruleId: 'no-this-before-super',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: [],
}

const configuration$a = {
	id: 'no-unexpected-multiline',
	ruleId: 'no-unexpected-multiline',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: [],
}

const configuration$9 = {
	id: 'no-useless-call',
	ruleId: 'no-useless-call',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$8 = {
	id: 'no-useless-rename',
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
	id: 'prefer-arrow-callback',
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
	id: 'prefer-numeric-literals',
	ruleId: 'prefer-numeric-literals',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$5 = {
	id: 'prefer-rest-params',
	ruleId: 'prefer-rest-params',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$4 = {
	id: 'prefer-spread',
	ruleId: 'prefer-spread',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$3 = {
	id: 'semi-style',
	ruleId: 'semi-style',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [
		'first',
	],
}

const configuration$2 = {
	id: 'semi',
	ruleId: 'semi',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [
		'never',
		{
			beforeStatementContinuationChars: 'never',
		},
	],
}

const configuration$1 = {
	id: 'sort-keys',
	ruleId: 'sort-keys',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: false,
}

const configuration = {
	id: 'space-in-parens',
	ruleId: 'space-in-parens',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: true,
	options: ['never'],
}

const _eslint_ = [
	configuration$q,
	configuration$p,
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
		{throw new Error(error)}
		if (error.message.includes('Cannot find module'))
		{return false}
		throw error
	}
	return true
}

function makeEslintrc(options, ...morePriorities) {
	if (typeof options === 'string') {
		return makeEslintrc({
			priorities: [
				options,
				...morePriorities
			],
		})
	}
	const { priorities, dangerzone, overrides, } = options
	return {
		...overrides,
		rules: {
			...(rulesConfigurations
			.filter(excludeIgnored)
			.filter(config => priorities.includes(config.priority))
			.filter(config => providers[config.providerId])
			.reduce((r, config) => ({
				...r,
				[config.id]: (config.activate
					? [
						'error',
						...(config.optionsDangerzone && (dangerzone === true
							||
								(dangerzone || []).includes(config.id))
							? config.optionsDangerzone
							: config.options)
					]
					: 'off')
			}), {})),
			...overrides?.rules,
		},
	}
}
function excludeIgnored(config) {
	return !config.ignore
}

module.exports = makeEslintrc
