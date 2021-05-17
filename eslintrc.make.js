'use strict'

const configuration$t = {
	ruleId: 'brace-style',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: true,
	options: [
		'1tbs',
		{
			allowSingleLine: false,
		},
	],
}

const configuration$s = {
	ruleId: '@typescript-eslint/brace-style',
	providerId: '@typescript-eslint/eslint-plugin',
	base: configuration$t,
}

const _typescriptEslint_ = [
	configuration$s
]

const configuration$r = {
	ruleId: 'array-element-newline',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: false,
}

const configuration$q = {
	ruleId: 'camelcase',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: false,
}

const configuration$p = {
	ruleId: 'consistent-return',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [{
		treatUndefinedAsUnspecified: false,
	}],
}

const configuration$o = {
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

const configuration$n = {
	ruleId: 'id-match',
	providerId: 'eslint',
	ignore: true,
}

const configuration$m = {
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
				'TemplateLiteral > *', // https://stackoverflow.com/a/53094449
			],
			ignoreComments: false,
		},
	],
}

const configuration$l = {
	ruleId: 'lines-between-class-members',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: true,
	options: ['always'],
}

const configuration$k = {
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

const configuration$j = {
	ruleId: 'no-case-declarations',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$i = {
	ruleId: 'no-func-assign',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: [],
}

const configuration$h = {
	ruleId: 'no-label-var',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$g = {
	ruleId: 'no-mixed-spaces-and-tabs',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: ['smart-tabs'],
}

const configuration$f = {
	ruleId: 'no-nonoctal-decimal-escape',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$e = {
	ruleId: 'no-restricted-properties',
	providerId: 'eslint',
	ignore: true,
}

const configuration$d = {
	ruleId: 'no-return-assign',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: ['always'],
}

const configuration$c = {
	ruleId: 'no-this-before-super',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: [],
}

const configuration$b = {
	ruleId: 'no-unexpected-multiline',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: [],
}

const configuration$a = {
	ruleId: 'no-useless-call',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$9 = {
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

const configuration$8 = {
	ruleId: 'prefer-arrow-callback',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [{
		allowNamedFunctions: false,
		allowUnboundThis: false,
	}],
}

const configuration$7 = {
	ruleId: 'prefer-numeric-literals',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$6 = {
	ruleId: 'prefer-rest-params',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$5 = {
	ruleId: 'prefer-spread',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [],
}

const configuration$4 = {
	ruleId: 'semi-style',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [
		'first',
	],
}

const configuration$3 = {
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

const configuration$2 = {
	ruleId: 'sort-keys',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: false,
}

const configuration$1 = {
	ruleId: 'space-in-parens',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: true,
	options: ['never'],
}

const _eslint_ = [
	configuration$r,
	configuration$t,
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
	configuration$1
]

const configuration = {
	ruleId: 'import/no-extraneous-dependencies',
	providerId: 'eslint-plugin-import',
	priority: 'IMPORTANT',
	activate: true,
	options: [{
		bundledDependencies: true,
		devDependencies: ['!**/src/**'],
		optionalDependencies: false,
		peerDependencies: false,
	}],
}

const _import_ = [
	configuration
]

const rulesConfigurations = [
	..._typescriptEslint_,
	..._eslint_,
	..._import_
]

function canRequire(id) {
	try {
		require.resolve(id)
	} catch (error) {
		if (typeof error === 'string') {
			throw new Error(error)
		}
		if (error.message.includes('Cannot find module')) {
			return false
		}
		throw error
	}
	return true
}

const providers = {
	'eslint': canRequire('eslint') && 'eslint',
	'@typescript-eslint/eslint-plugin': canRequire('@typescript-eslint/eslint-plugin') && '@typescript-eslint',
	'eslint-plugin-import': canRequire('eslint-plugin-import') && 'import',
	'eslint-plugin-jsdoc': canRequire('eslint-plugin-jsdoc') && 'jsdoc',
	'eslint-plugin-react': canRequire('eslint-plugin-react') && 'react',
	'eslint-plugin-react-hooks': canRequire('eslint-plugin-react-hooks') && 'react-hooks',
	'eslint-plugin-regex': canRequire('eslint-plugin-regex') && 'regex',
	'eslint-plugin-typescript-custom-sort-keys': canRequire('eslint-plugin-typescript-custom-sort-keys') && 'typescript-custom-sort-keys',
	'eslint-plugin-unused-imports': canRequire('eslint-plugin-unused-imports') && 'unused-imports',
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
	const availableConfigurations = rulesConfigurations.filter(config => providers[config.providerId])
	const overrideConfigurations = availableConfigurations.filter((c) => Boolean(c.base))
	const overriddenConfigurations = overrideConfigurations.map(o => o.base)
	const usableConfigurations = (availableConfigurations
	.filter((config) => (!overriddenConfigurations.includes(config)))
	.map((config) => {
		if (!isOverride(config)) {
			return config
		}
		const { base, ...overrides } = config
		return {
			...base,
			...overrides,
		}
	})
	.filter((config) => {
		return !Boolean(config.ignore)
	})
	.filter(config => priorities.includes(config.priority))
	.map((config) => ({
		plugin: providers[config.providerId],
		rule: { [config.ruleId]: (config.activate
				? [
					'error',
					...(config.optionsDangerzone && (dangerzone === true
						||
							(dangerzone || []).includes(config.ruleId))
						? config.optionsDangerzone
						: config.options)
				]
				: 'off')
		}
	}), {}))
	return {
		...overrides,
		...((!overrides?.parser) && canRequire('@typescript-eslint/parser')
			? { parser: '@typescript-eslint/parser' }
			: {}),
		plugins: ([
			...usableConfigurations
			.map(c => c.plugin)
			.filter((p) => p !== 'eslint'),
			...(overrides?.plugins || []),
		]),
		rules: Object.assign({}, ...usableConfigurations.map(c => c.rule), overrides?.rules),
	}
}
function isOverride(config) {
	return Boolean(config.base)
}

module.exports = makeEslintrc
