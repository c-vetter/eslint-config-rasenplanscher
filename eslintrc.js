'use strict'

const configuration = {
    ruleId: 'semi-style',
    providerId: 'eslint',
    priority: 'TASTE',
    activate: true,
    options: [
        'first',
    ],
}

const configuration$1 = {
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
    configuration$1
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
const HELPFUL = 'HELPFUL'

const eslintrc = makeEslintrc(IMPORTANT, HELPFUL)

module.exports = eslintrc
