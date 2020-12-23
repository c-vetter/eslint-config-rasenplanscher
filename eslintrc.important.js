'use strict'

const IMPORTANT = Symbol()
const TASTE = Symbol()

const providerEslint = {
    id: 'eslint',
    available: canRequire('eslint'),
}
const providerTypescriptEslint = {
    id: '@typescript-eslint/eslint-plugin',
    namespace: '@typescript-eslint',
    available: canRequire('@typescript-eslint/eslint-plugin'),
}
const providerImport = {
    id: 'eslint-plugin-import',
    namespace: 'import',
    available: canRequire('eslint-plugin-import'),
}
const providerJsdoc = {
    id: 'eslint-plugin-jsdoc',
    namespace: 'jsdoc',
    available: canRequire('eslint-plugin-jsdoc'),
}
const providerReact = {
    id: 'eslint-plugin-react',
    namespace: 'react',
    available: canRequire('eslint-plugin-react'),
}
const providerReactHooks = {
    id: 'eslint-plugin-react-hooks',
    namespace: 'react-hooks',
    available: canRequire('eslint-plugin-react-hooks'),
}
const providerRegex = {
    id: 'eslint-plugin-regex',
    namespace: 'regex',
    available: canRequire('eslint-plugin-regex'),
}
const providerTypescriptCustomSortKeys = {
    id: 'eslint-plugin-typescript-custom-sort-keys',
    namespace: 'typescript-custom-sort-keys',
    available: canRequire('eslint-plugin-typescript-custom-sort-keys'),
}
const providerUnusedImports = {
    id: 'eslint-plugin-unused-imports',
    namespace: 'unused-imports',
    available: canRequire('eslint-plugin-unused-imports'),
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

const semiStyle = {
    id: 'semi-style',
    key: 'semi-style',
    namespace: 'eslint',
    meta: {
        type: 'layout',
        docs: {
            description: 'enforce location of semicolons',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/semi-style'
        },
        schema: [
            {
                enum: [
                    'last',
                    'first'
                ]
            }
        ],
        fixable: 'whitespace',
        messages: {
            expectedSemiColon: 'Expected this semicolon to be at {{pos}}.'
        }
    },
    provider: providerEslint,
}

const semiStyle$1 = {
    rule: semiStyle,
    priority: TASTE,
    activate: true,
    options: [
        'first'
    ],
}

const semi = {
    id: 'semi',
    key: 'semi',
    namespace: 'eslint',
    meta: {
        type: 'layout',
        docs: {
            description: 'require or disallow semicolons instead of ASI',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/semi'
        },
        fixable: 'code',
        schema: {
            anyOf: [
                {
                    type: 'array',
                    items: [
                        {
                            enum: [
                                'never'
                            ]
                        },
                        {
                            type: 'object',
                            properties: {
                                beforeStatementContinuationChars: {
                                    enum: [
                                        'always',
                                        'any',
                                        'never'
                                    ]
                                }
                            },
                            additionalProperties: false
                        }
                    ],
                    minItems: 0,
                    maxItems: 2
                },
                {
                    type: 'array',
                    items: [
                        {
                            enum: [
                                'always'
                            ]
                        },
                        {
                            type: 'object',
                            properties: {
                                omitLastInOneLineBlock: {
                                    type: 'boolean'
                                }
                            },
                            additionalProperties: false
                        }
                    ],
                    minItems: 0,
                    maxItems: 2
                }
            ]
        },
        messages: {
            missingSemi: 'Missing semicolon.',
            extraSemi: 'Extra semicolon.'
        }
    },
    provider: providerEslint,
}

const semi$1 = {
    rule: semi,
    priority: IMPORTANT,
    activate: true,
    options: [
        'never',
        {
            beforeStatementContinuationChars: 'never',
        },
    ],
}

const eslint = [
    semiStyle$1,
    semi$1
]

const rulesConfigurations = [
    ...eslint
]

function makeEslintrc(...priorities) {
    return {
        rules: (rulesConfigurations
            .filter(c => c.rule.provider.available)
            .filter(c => priorities.includes(c.priority))
            .reduce((r, c) => ({
            ...r,
            [c.rule.id]: [
                c.activate ? 'error' : 'off',
                ...c.options
            ]
        }), {})),
    }
}

const eslintrc_important = makeEslintrc(IMPORTANT)

module.exports = eslintrc_important
