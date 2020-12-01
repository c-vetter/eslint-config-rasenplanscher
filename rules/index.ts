import { accessorPairs } from './eslint/accessor-pairs'
import { arrayBracketNewline } from './eslint/array-bracket-newline'
import { arrayBracketSpacing } from './eslint/array-bracket-spacing'
import { arrayCallbackReturn } from './eslint/array-callback-return'
import { arrayElementNewline } from './eslint/array-element-newline'
import { arrowBodyStyle } from './eslint/arrow-body-style'
import { arrowParens } from './eslint/arrow-parens'
import { arrowSpacing } from './eslint/arrow-spacing'
import { blockScopedVar } from './eslint/block-scoped-var'
import { blockSpacing } from './eslint/block-spacing'
import { braceStyle } from './eslint/brace-style'
import { callbackReturn } from './eslint/callback-return'
import { camelcase } from './eslint/camelcase'
import { capitalizedComments } from './eslint/capitalized-comments'
import { classMethodsUseThis } from './eslint/class-methods-use-this'
import { commaDangle } from './eslint/comma-dangle'
import { commaSpacing } from './eslint/comma-spacing'
import { commaStyle } from './eslint/comma-style'
import { complexity } from './eslint/complexity'
import { computedPropertySpacing } from './eslint/computed-property-spacing'
import { consistentReturn } from './eslint/consistent-return'
import { consistentThis } from './eslint/consistent-this'
import { constructorSuper } from './eslint/constructor-super'
import { curly } from './eslint/curly'
import { defaultCase } from './eslint/default-case'
import { defaultCaseLast } from './eslint/default-case-last'
import { defaultParamLast } from './eslint/default-param-last'
import { dotLocation } from './eslint/dot-location'
import { dotNotation } from './eslint/dot-notation'
import { eolLast } from './eslint/eol-last'
import { eqeqeq } from './eslint/eqeqeq'
import { forDirection } from './eslint/for-direction'
import { funcCallSpacing } from './eslint/func-call-spacing'
import { funcNameMatching } from './eslint/func-name-matching'
import { funcNames } from './eslint/func-names'
import { funcStyle } from './eslint/func-style'
import { functionCallArgumentNewline } from './eslint/function-call-argument-newline'
import { functionParenNewline } from './eslint/function-paren-newline'
import { generatorStarSpacing } from './eslint/generator-star-spacing'
import { getterReturn } from './eslint/getter-return'
import { globalRequire } from './eslint/global-require'
import { groupedAccessorPairs } from './eslint/grouped-accessor-pairs'
import { guardForIn } from './eslint/guard-for-in'
import { handleCallbackErr } from './eslint/handle-callback-err'
import { idBlacklist } from './eslint/id-blacklist'
import { idDenylist } from './eslint/id-denylist'
import { idLength } from './eslint/id-length'
import { idMatch } from './eslint/id-match'
import { implicitArrowLinebreak } from './eslint/implicit-arrow-linebreak'
import { indent } from './eslint/indent'
import { indentLegacy } from './eslint/indent-legacy'
import { initDeclarations } from './eslint/init-declarations'
import { jsxQuotes } from './eslint/jsx-quotes'
import { keySpacing } from './eslint/key-spacing'
import { keywordSpacing } from './eslint/keyword-spacing'
import { lineCommentPosition } from './eslint/line-comment-position'
import { linebreakStyle } from './eslint/linebreak-style'
import { linesAroundComment } from './eslint/lines-around-comment'
import { linesAroundDirective } from './eslint/lines-around-directive'
import { linesBetweenClassMembers } from './eslint/lines-between-class-members'
import { maxClassesPerFile } from './eslint/max-classes-per-file'
import { maxDepth } from './eslint/max-depth'
import { maxLen } from './eslint/max-len'
import { maxLines } from './eslint/max-lines'
import { maxLinesPerFunction } from './eslint/max-lines-per-function'
import { maxNestedCallbacks } from './eslint/max-nested-callbacks'
import { maxParams } from './eslint/max-params'
import { maxStatements } from './eslint/max-statements'
import { maxStatementsPerLine } from './eslint/max-statements-per-line'
import { multilineCommentStyle } from './eslint/multiline-comment-style'
import { multilineTernary } from './eslint/multiline-ternary'
import { newCap } from './eslint/new-cap'
import { newParens } from './eslint/new-parens'
import { newlineAfterVar } from './eslint/newline-after-var'
import { newlineBeforeReturn } from './eslint/newline-before-return'
import { newlinePerChainedCall } from './eslint/newline-per-chained-call'
import { noAlert } from './eslint/no-alert'
import { noArrayConstructor } from './eslint/no-array-constructor'
import { noAsyncPromiseExecutor } from './eslint/no-async-promise-executor'
import { noAwaitInLoop } from './eslint/no-await-in-loop'
import { noBitwise } from './eslint/no-bitwise'
import { noBufferConstructor } from './eslint/no-buffer-constructor'
import { noCaller } from './eslint/no-caller'
import { noCaseDeclarations } from './eslint/no-case-declarations'
import { noCatchShadow } from './eslint/no-catch-shadow'
import { noClassAssign } from './eslint/no-class-assign'
import { noCompareNegZero } from './eslint/no-compare-neg-zero'
import { noCondAssign } from './eslint/no-cond-assign'
import { noConfusingArrow } from './eslint/no-confusing-arrow'
import { noConsole } from './eslint/no-console'
import { noConstAssign } from './eslint/no-const-assign'
import { noConstantCondition } from './eslint/no-constant-condition'
import { noConstructorReturn } from './eslint/no-constructor-return'
import { noContinue } from './eslint/no-continue'
import { noControlRegex } from './eslint/no-control-regex'
import { noDebugger } from './eslint/no-debugger'
import { noDeleteVar } from './eslint/no-delete-var'
import { noDivRegex } from './eslint/no-div-regex'
import { noDupeArgs } from './eslint/no-dupe-args'
import { noDupeClassMembers } from './eslint/no-dupe-class-members'
import { noDupeElseIf } from './eslint/no-dupe-else-if'
import { noDupeKeys } from './eslint/no-dupe-keys'
import { noDuplicateCase } from './eslint/no-duplicate-case'
import { noDuplicateImports } from './eslint/no-duplicate-imports'
import { noElseReturn } from './eslint/no-else-return'
import { noEmpty } from './eslint/no-empty'
import { noEmptyCharacterClass } from './eslint/no-empty-character-class'
import { noEmptyFunction } from './eslint/no-empty-function'
import { noEmptyPattern } from './eslint/no-empty-pattern'
import { noEqNull } from './eslint/no-eq-null'
import { noEval } from './eslint/no-eval'
import { noExAssign } from './eslint/no-ex-assign'
import { noExtendNative } from './eslint/no-extend-native'
import { noExtraBind } from './eslint/no-extra-bind'
import { noExtraBooleanCast } from './eslint/no-extra-boolean-cast'
import { noExtraLabel } from './eslint/no-extra-label'
import { noExtraParens } from './eslint/no-extra-parens'
import { noExtraSemi } from './eslint/no-extra-semi'
import { noFallthrough } from './eslint/no-fallthrough'
import { noFloatingDecimal } from './eslint/no-floating-decimal'
import { noFuncAssign } from './eslint/no-func-assign'
import { noGlobalAssign } from './eslint/no-global-assign'
import { noImplicitCoercion } from './eslint/no-implicit-coercion'
import { noImplicitGlobals } from './eslint/no-implicit-globals'
import { noImpliedEval } from './eslint/no-implied-eval'
import { noImportAssign } from './eslint/no-import-assign'
import { noInlineComments } from './eslint/no-inline-comments'
import { noInnerDeclarations } from './eslint/no-inner-declarations'
import { noInvalidRegexp } from './eslint/no-invalid-regexp'
import { noInvalidThis } from './eslint/no-invalid-this'
import { noIrregularWhitespace } from './eslint/no-irregular-whitespace'
import { noIterator } from './eslint/no-iterator'
import { noLabelVar } from './eslint/no-label-var'
import { noLabels } from './eslint/no-labels'
import { noLoneBlocks } from './eslint/no-lone-blocks'
import { noLonelyIf } from './eslint/no-lonely-if'
import { noLoopFunc } from './eslint/no-loop-func'
import { noLossOfPrecision } from './eslint/no-loss-of-precision'
import { noMagicNumbers } from './eslint/no-magic-numbers'
import { noMisleadingCharacterClass } from './eslint/no-misleading-character-class'
import { noMixedOperators } from './eslint/no-mixed-operators'
import { noMixedRequires } from './eslint/no-mixed-requires'
import { noMixedSpacesAndTabs } from './eslint/no-mixed-spaces-and-tabs'
import { noMultiAssign } from './eslint/no-multi-assign'
import { noMultiSpaces } from './eslint/no-multi-spaces'
import { noMultiStr } from './eslint/no-multi-str'
import { noMultipleEmptyLines } from './eslint/no-multiple-empty-lines'
import { noNativeReassign } from './eslint/no-native-reassign'
import { noNegatedCondition } from './eslint/no-negated-condition'
import { noNegatedInLhs } from './eslint/no-negated-in-lhs'
import { noNestedTernary } from './eslint/no-nested-ternary'
import { noNew } from './eslint/no-new'
import { noNewFunc } from './eslint/no-new-func'
import { noNewObject } from './eslint/no-new-object'
import { noNewRequire } from './eslint/no-new-require'
import { noNewSymbol } from './eslint/no-new-symbol'
import { noNewWrappers } from './eslint/no-new-wrappers'
import { noNonoctalDecimalEscape } from './eslint/no-nonoctal-decimal-escape'
import { noObjCalls } from './eslint/no-obj-calls'
import { noOctal } from './eslint/no-octal'
import { noOctalEscape } from './eslint/no-octal-escape'
import { noParamReassign } from './eslint/no-param-reassign'
import { noPathConcat } from './eslint/no-path-concat'
import { noPlusplus } from './eslint/no-plusplus'
import { noProcessEnv } from './eslint/no-process-env'
import { noProcessExit } from './eslint/no-process-exit'
import { noPromiseExecutorReturn } from './eslint/no-promise-executor-return'
import { noProto } from './eslint/no-proto'
import { noPrototypeBuiltins } from './eslint/no-prototype-builtins'
import { noRedeclare } from './eslint/no-redeclare'
import { noRegexSpaces } from './eslint/no-regex-spaces'
import { noRestrictedExports } from './eslint/no-restricted-exports'
import { noRestrictedGlobals } from './eslint/no-restricted-globals'
import { noRestrictedImports } from './eslint/no-restricted-imports'
import { noRestrictedModules } from './eslint/no-restricted-modules'
import { noRestrictedProperties } from './eslint/no-restricted-properties'
import { noRestrictedSyntax } from './eslint/no-restricted-syntax'
import { noReturnAssign } from './eslint/no-return-assign'
import { noReturnAwait } from './eslint/no-return-await'
import { noScriptUrl } from './eslint/no-script-url'
import { noSelfAssign } from './eslint/no-self-assign'
import { noSelfCompare } from './eslint/no-self-compare'
import { noSequences } from './eslint/no-sequences'
import { noSetterReturn } from './eslint/no-setter-return'
import { noShadow } from './eslint/no-shadow'
import { noShadowRestrictedNames } from './eslint/no-shadow-restricted-names'
import { noSpacedFunc } from './eslint/no-spaced-func'
import { noSparseArrays } from './eslint/no-sparse-arrays'
import { noSync } from './eslint/no-sync'
import { noTabs } from './eslint/no-tabs'
import { noTemplateCurlyInString } from './eslint/no-template-curly-in-string'
import { noTernary } from './eslint/no-ternary'
import { noThisBeforeSuper } from './eslint/no-this-before-super'
import { noThrowLiteral } from './eslint/no-throw-literal'
import { noTrailingSpaces } from './eslint/no-trailing-spaces'
import { noUndef } from './eslint/no-undef'
import { noUndefInit } from './eslint/no-undef-init'
import { noUndefined } from './eslint/no-undefined'
import { noUnderscoreDangle } from './eslint/no-underscore-dangle'
import { noUnexpectedMultiline } from './eslint/no-unexpected-multiline'
import { noUnmodifiedLoopCondition } from './eslint/no-unmodified-loop-condition'
import { noUnneededTernary } from './eslint/no-unneeded-ternary'
import { noUnreachable } from './eslint/no-unreachable'
import { noUnreachableLoop } from './eslint/no-unreachable-loop'
import { noUnsafeFinally } from './eslint/no-unsafe-finally'
import { noUnsafeNegation } from './eslint/no-unsafe-negation'
import { noUnusedExpressions } from './eslint/no-unused-expressions'
import { noUnusedLabels } from './eslint/no-unused-labels'
import { noUnusedVars } from './eslint/no-unused-vars'
import { noUseBeforeDefine } from './eslint/no-use-before-define'
import { noUselessBackreference } from './eslint/no-useless-backreference'
import { noUselessCall } from './eslint/no-useless-call'
import { noUselessCatch } from './eslint/no-useless-catch'
import { noUselessComputedKey } from './eslint/no-useless-computed-key'
import { noUselessConcat } from './eslint/no-useless-concat'
import { noUselessConstructor } from './eslint/no-useless-constructor'
import { noUselessEscape } from './eslint/no-useless-escape'
import { noUselessRename } from './eslint/no-useless-rename'
import { noUselessReturn } from './eslint/no-useless-return'
import { noVar } from './eslint/no-var'
import { noVoid } from './eslint/no-void'
import { noWarningComments } from './eslint/no-warning-comments'
import { noWhitespaceBeforeProperty } from './eslint/no-whitespace-before-property'
import { noWith } from './eslint/no-with'
import { nonblockStatementBodyPosition } from './eslint/nonblock-statement-body-position'
import { objectCurlyNewline } from './eslint/object-curly-newline'
import { objectCurlySpacing } from './eslint/object-curly-spacing'
import { objectPropertyNewline } from './eslint/object-property-newline'
import { objectShorthand } from './eslint/object-shorthand'
import { oneVar } from './eslint/one-var'
import { oneVarDeclarationPerLine } from './eslint/one-var-declaration-per-line'
import { operatorAssignment } from './eslint/operator-assignment'
import { operatorLinebreak } from './eslint/operator-linebreak'
import { paddedBlocks } from './eslint/padded-blocks'
import { paddingLineBetweenStatements } from './eslint/padding-line-between-statements'
import { preferArrowCallback } from './eslint/prefer-arrow-callback'
import { preferConst } from './eslint/prefer-const'
import { preferDestructuring } from './eslint/prefer-destructuring'
import { preferExponentiationOperator } from './eslint/prefer-exponentiation-operator'
import { preferNamedCaptureGroup } from './eslint/prefer-named-capture-group'
import { preferNumericLiterals } from './eslint/prefer-numeric-literals'
import { preferObjectSpread } from './eslint/prefer-object-spread'
import { preferPromiseRejectErrors } from './eslint/prefer-promise-reject-errors'
import { preferReflect } from './eslint/prefer-reflect'
import { preferRegexLiterals } from './eslint/prefer-regex-literals'
import { preferRestParams } from './eslint/prefer-rest-params'
import { preferSpread } from './eslint/prefer-spread'
import { preferTemplate } from './eslint/prefer-template'
import { quoteProps } from './eslint/quote-props'
import { quotes } from './eslint/quotes'
import { radix } from './eslint/radix'
import { requireAtomicUpdates } from './eslint/require-atomic-updates'
import { requireAwait } from './eslint/require-await'
import { requireJsdoc } from './eslint/require-jsdoc'
import { requireUnicodeRegexp } from './eslint/require-unicode-regexp'
import { requireYield } from './eslint/require-yield'
import { restSpreadSpacing } from './eslint/rest-spread-spacing'
import { semi } from './eslint/semi'
import { semiSpacing } from './eslint/semi-spacing'
import { semiStyle } from './eslint/semi-style'
import { sortImports } from './eslint/sort-imports'
import { sortKeys } from './eslint/sort-keys'
import { sortVars } from './eslint/sort-vars'
import { spaceBeforeBlocks } from './eslint/space-before-blocks'
import { spaceBeforeFunctionParen } from './eslint/space-before-function-paren'
import { spaceInParens } from './eslint/space-in-parens'
import { spaceInfixOps } from './eslint/space-infix-ops'
import { spaceUnaryOps } from './eslint/space-unary-ops'
import { spacedComment } from './eslint/spaced-comment'
import { strict } from './eslint/strict'
import { switchColonSpacing } from './eslint/switch-colon-spacing'
import { symbolDescription } from './eslint/symbol-description'
import { templateCurlySpacing } from './eslint/template-curly-spacing'
import { templateTagSpacing } from './eslint/template-tag-spacing'
import { unicodeBom } from './eslint/unicode-bom'
import { useIsnan } from './eslint/use-isnan'
import { validJsdoc } from './eslint/valid-jsdoc'
import { validTypeof } from './eslint/valid-typeof'
import { varsOnTop } from './eslint/vars-on-top'
import { wrapIife } from './eslint/wrap-iife'
import { wrapRegex } from './eslint/wrap-regex'
import { yieldStarSpacing } from './eslint/yield-star-spacing'
import { yoda } from './eslint/yoda'
import { typescriptEslintAdjacentOverloadSignatures } from './typescript-eslint/adjacent-overload-signatures'
import { typescriptEslintArrayType } from './typescript-eslint/array-type'
import { typescriptEslintAwaitThenable } from './typescript-eslint/await-thenable'
import { typescriptEslintBanTsComment } from './typescript-eslint/ban-ts-comment'
import { typescriptEslintBanTslintComment } from './typescript-eslint/ban-tslint-comment'
import { typescriptEslintBanTypes } from './typescript-eslint/ban-types'
import { typescriptEslintBraceStyle } from './typescript-eslint/brace-style'
import { typescriptEslintClassLiteralPropertyStyle } from './typescript-eslint/class-literal-property-style'
import { typescriptEslintCommaDangle } from './typescript-eslint/comma-dangle'
import { typescriptEslintCommaSpacing } from './typescript-eslint/comma-spacing'
import { typescriptEslintConsistentIndexedObjectStyle } from './typescript-eslint/consistent-indexed-object-style'
import { typescriptEslintConsistentTypeAssertions } from './typescript-eslint/consistent-type-assertions'
import { typescriptEslintConsistentTypeDefinitions } from './typescript-eslint/consistent-type-definitions'
import { typescriptEslintConsistentTypeImports } from './typescript-eslint/consistent-type-imports'
import { typescriptEslintDefaultParamLast } from './typescript-eslint/default-param-last'
import { typescriptEslintDotNotation } from './typescript-eslint/dot-notation'
import { typescriptEslintExplicitFunctionReturnType } from './typescript-eslint/explicit-function-return-type'
import { typescriptEslintExplicitMemberAccessibility } from './typescript-eslint/explicit-member-accessibility'
import { typescriptEslintExplicitModuleBoundaryTypes } from './typescript-eslint/explicit-module-boundary-types'
import { typescriptEslintFuncCallSpacing } from './typescript-eslint/func-call-spacing'
import { typescriptEslintIndent } from './typescript-eslint/indent'
import { typescriptEslintInitDeclarations } from './typescript-eslint/init-declarations'
import { typescriptEslintKeywordSpacing } from './typescript-eslint/keyword-spacing'
import { typescriptEslintLinesBetweenClassMembers } from './typescript-eslint/lines-between-class-members'
import { typescriptEslintMemberDelimiterStyle } from './typescript-eslint/member-delimiter-style'
import { typescriptEslintMemberOrdering } from './typescript-eslint/member-ordering'
import { typescriptEslintMethodSignatureStyle } from './typescript-eslint/method-signature-style'
import { typescriptEslintNamingConvention } from './typescript-eslint/naming-convention'
import { typescriptEslintNoArrayConstructor } from './typescript-eslint/no-array-constructor'
import { typescriptEslintNoBaseToString } from './typescript-eslint/no-base-to-string'
import { typescriptEslintNoConfusingNonNullAssertion } from './typescript-eslint/no-confusing-non-null-assertion'
import { typescriptEslintNoConfusingVoidExpression } from './typescript-eslint/no-confusing-void-expression'
import { typescriptEslintNoDupeClassMembers } from './typescript-eslint/no-dupe-class-members'
import { typescriptEslintNoDuplicateImports } from './typescript-eslint/no-duplicate-imports'
import { typescriptEslintNoDynamicDelete } from './typescript-eslint/no-dynamic-delete'
import { typescriptEslintNoEmptyFunction } from './typescript-eslint/no-empty-function'
import { typescriptEslintNoEmptyInterface } from './typescript-eslint/no-empty-interface'
import { typescriptEslintNoExplicitAny } from './typescript-eslint/no-explicit-any'
import { typescriptEslintNoExtraNonNullAssertion } from './typescript-eslint/no-extra-non-null-assertion'
import { typescriptEslintNoExtraParens } from './typescript-eslint/no-extra-parens'
import { typescriptEslintNoExtraSemi } from './typescript-eslint/no-extra-semi'
import { typescriptEslintNoExtraneousClass } from './typescript-eslint/no-extraneous-class'
import { typescriptEslintNoFloatingPromises } from './typescript-eslint/no-floating-promises'
import { typescriptEslintNoForInArray } from './typescript-eslint/no-for-in-array'
import { typescriptEslintNoImplicitAnyCatch } from './typescript-eslint/no-implicit-any-catch'
import { typescriptEslintNoImpliedEval } from './typescript-eslint/no-implied-eval'
import { typescriptEslintNoInferrableTypes } from './typescript-eslint/no-inferrable-types'
import { typescriptEslintNoInvalidThis } from './typescript-eslint/no-invalid-this'
import { typescriptEslintNoInvalidVoidType } from './typescript-eslint/no-invalid-void-type'
import { typescriptEslintNoLoopFunc } from './typescript-eslint/no-loop-func'
import { typescriptEslintNoLossOfPrecision } from './typescript-eslint/no-loss-of-precision'
import { typescriptEslintNoMagicNumbers } from './typescript-eslint/no-magic-numbers'
import { typescriptEslintNoMisusedNew } from './typescript-eslint/no-misused-new'
import { typescriptEslintNoMisusedPromises } from './typescript-eslint/no-misused-promises'
import { typescriptEslintNoNamespace } from './typescript-eslint/no-namespace'
import { typescriptEslintNoNonNullAssertedOptionalChain } from './typescript-eslint/no-non-null-asserted-optional-chain'
import { typescriptEslintNoNonNullAssertion } from './typescript-eslint/no-non-null-assertion'
import { typescriptEslintNoParameterProperties } from './typescript-eslint/no-parameter-properties'
import { typescriptEslintNoRedeclare } from './typescript-eslint/no-redeclare'
import { typescriptEslintNoRequireImports } from './typescript-eslint/no-require-imports'
import { typescriptEslintNoShadow } from './typescript-eslint/no-shadow'
import { typescriptEslintNoThisAlias } from './typescript-eslint/no-this-alias'
import { typescriptEslintNoThrowLiteral } from './typescript-eslint/no-throw-literal'
import { typescriptEslintNoTypeAlias } from './typescript-eslint/no-type-alias'
import { typescriptEslintNoUnnecessaryBooleanLiteralCompare } from './typescript-eslint/no-unnecessary-boolean-literal-compare'
import { typescriptEslintNoUnnecessaryCondition } from './typescript-eslint/no-unnecessary-condition'
import { typescriptEslintNoUnnecessaryQualifier } from './typescript-eslint/no-unnecessary-qualifier'
import { typescriptEslintNoUnnecessaryTypeArguments } from './typescript-eslint/no-unnecessary-type-arguments'
import { typescriptEslintNoUnnecessaryTypeAssertion } from './typescript-eslint/no-unnecessary-type-assertion'
import { typescriptEslintNoUnnecessaryTypeConstraint } from './typescript-eslint/no-unnecessary-type-constraint'
import { typescriptEslintNoUnsafeAssignment } from './typescript-eslint/no-unsafe-assignment'
import { typescriptEslintNoUnsafeCall } from './typescript-eslint/no-unsafe-call'
import { typescriptEslintNoUnsafeMemberAccess } from './typescript-eslint/no-unsafe-member-access'
import { typescriptEslintNoUnsafeReturn } from './typescript-eslint/no-unsafe-return'
import { typescriptEslintNoUnusedExpressions } from './typescript-eslint/no-unused-expressions'
import { typescriptEslintNoUnusedVars } from './typescript-eslint/no-unused-vars'
import { typescriptEslintNoUnusedVarsExperimental } from './typescript-eslint/no-unused-vars-experimental'
import { typescriptEslintNoUseBeforeDefine } from './typescript-eslint/no-use-before-define'
import { typescriptEslintNoUselessConstructor } from './typescript-eslint/no-useless-constructor'
import { typescriptEslintNoVarRequires } from './typescript-eslint/no-var-requires'
import { typescriptEslintPreferAsConst } from './typescript-eslint/prefer-as-const'
import { typescriptEslintPreferEnumInitializers } from './typescript-eslint/prefer-enum-initializers'
import { typescriptEslintPreferForOf } from './typescript-eslint/prefer-for-of'
import { typescriptEslintPreferFunctionType } from './typescript-eslint/prefer-function-type'
import { typescriptEslintPreferIncludes } from './typescript-eslint/prefer-includes'
import { typescriptEslintPreferLiteralEnumMember } from './typescript-eslint/prefer-literal-enum-member'
import { typescriptEslintPreferNamespaceKeyword } from './typescript-eslint/prefer-namespace-keyword'
import { typescriptEslintPreferNullishCoalescing } from './typescript-eslint/prefer-nullish-coalescing'
import { typescriptEslintPreferOptionalChain } from './typescript-eslint/prefer-optional-chain'
import { typescriptEslintPreferReadonly } from './typescript-eslint/prefer-readonly'
import { typescriptEslintPreferReadonlyParameterTypes } from './typescript-eslint/prefer-readonly-parameter-types'
import { typescriptEslintPreferReduceTypeParameter } from './typescript-eslint/prefer-reduce-type-parameter'
import { typescriptEslintPreferRegexpExec } from './typescript-eslint/prefer-regexp-exec'
import { typescriptEslintPreferStringStartsEndsWith } from './typescript-eslint/prefer-string-starts-ends-with'
import { typescriptEslintPreferTsExpectError } from './typescript-eslint/prefer-ts-expect-error'
import { typescriptEslintPromiseFunctionAsync } from './typescript-eslint/promise-function-async'
import { typescriptEslintQuotes } from './typescript-eslint/quotes'
import { typescriptEslintRequireArraySortCompare } from './typescript-eslint/require-array-sort-compare'
import { typescriptEslintRequireAwait } from './typescript-eslint/require-await'
import { typescriptEslintRestrictPlusOperands } from './typescript-eslint/restrict-plus-operands'
import { typescriptEslintRestrictTemplateExpressions } from './typescript-eslint/restrict-template-expressions'
import { typescriptEslintReturnAwait } from './typescript-eslint/return-await'
import { typescriptEslintSemi } from './typescript-eslint/semi'
import { typescriptEslintSpaceBeforeFunctionParen } from './typescript-eslint/space-before-function-paren'
import { typescriptEslintSpaceInfixOps } from './typescript-eslint/space-infix-ops'
import { typescriptEslintStrictBooleanExpressions } from './typescript-eslint/strict-boolean-expressions'
import { typescriptEslintSwitchExhaustivenessCheck } from './typescript-eslint/switch-exhaustiveness-check'
import { typescriptEslintTripleSlashReference } from './typescript-eslint/triple-slash-reference'
import { typescriptEslintTypeAnnotationSpacing } from './typescript-eslint/type-annotation-spacing'
import { typescriptEslintTypedef } from './typescript-eslint/typedef'
import { typescriptEslintUnboundMethod } from './typescript-eslint/unbound-method'
import { typescriptEslintUnifiedSignatures } from './typescript-eslint/unified-signatures'
import { importNoUnresolved } from './import/no-unresolved'
import { importNamed } from './import/named'
import { importDefault } from './import/default'
import { importNamespace } from './import/namespace'
import { importNoNamespace } from './import/no-namespace'
import { importExport } from './import/export'
import { importNoMutableExports } from './import/no-mutable-exports'
import { importExtensions } from './import/extensions'
import { importNoRestrictedPaths } from './import/no-restricted-paths'
import { importNoInternalModules } from './import/no-internal-modules'
import { importGroupExports } from './import/group-exports'
import { importNoRelativeParentImports } from './import/no-relative-parent-imports'
import { importNoSelfImport } from './import/no-self-import'
import { importNoCycle } from './import/no-cycle'
import { importNoNamedDefault } from './import/no-named-default'
import { importNoNamedAsDefault } from './import/no-named-as-default'
import { importNoNamedAsDefaultMember } from './import/no-named-as-default-member'
import { importNoAnonymousDefaultExport } from './import/no-anonymous-default-export'
import { importNoUnusedModules } from './import/no-unused-modules'
import { importNoCommonjs } from './import/no-commonjs'
import { importNoAmd } from './import/no-amd'
import { importNoDuplicates } from './import/no-duplicates'
import { importFirst } from './import/first'
import { importMaxDependencies } from './import/max-dependencies'
import { importNoExtraneousDependencies } from './import/no-extraneous-dependencies'
import { importNoAbsolutePath } from './import/no-absolute-path'
import { importNoNodejsModules } from './import/no-nodejs-modules'
import { importNoWebpackLoaderSyntax } from './import/no-webpack-loader-syntax'
import { importOrder } from './import/order'
import { importNewlineAfterImport } from './import/newline-after-import'
import { importPreferDefaultExport } from './import/prefer-default-export'
import { importNoDefaultExport } from './import/no-default-export'
import { importNoNamedExport } from './import/no-named-export'
import { importNoDynamicRequire } from './import/no-dynamic-require'
import { importUnambiguous } from './import/unambiguous'
import { importNoUnassignedImport } from './import/no-unassigned-import'
import { importNoUselessPathSegments } from './import/no-useless-path-segments'
import { importDynamicImportChunkname } from './import/dynamic-import-chunkname'
import { importExportsLast } from './import/exports-last'
import { importNoDeprecated } from './import/no-deprecated'
import { importImportsFirst } from './import/imports-first'
import { jsdocCheckAccess } from './jsdoc/check-access'
import { jsdocCheckAlignment } from './jsdoc/check-alignment'
import { jsdocCheckExamples } from './jsdoc/check-examples'
import { jsdocCheckIndentation } from './jsdoc/check-indentation'
import { jsdocCheckLineAlignment } from './jsdoc/check-line-alignment'
import { jsdocCheckParamNames } from './jsdoc/check-param-names'
import { jsdocCheckPropertyNames } from './jsdoc/check-property-names'
import { jsdocCheckSyntax } from './jsdoc/check-syntax'
import { jsdocCheckTagNames } from './jsdoc/check-tag-names'
import { jsdocCheckTypes } from './jsdoc/check-types'
import { jsdocCheckValues } from './jsdoc/check-values'
import { jsdocEmptyTags } from './jsdoc/empty-tags'
import { jsdocImplementsOnClasses } from './jsdoc/implements-on-classes'
import { jsdocMatchDescription } from './jsdoc/match-description'
import { jsdocNewlineAfterDescription } from './jsdoc/newline-after-description'
import { jsdocNoBadBlocks } from './jsdoc/no-bad-blocks'
import { jsdocNoDefaults } from './jsdoc/no-defaults'
import { jsdocNoTypes } from './jsdoc/no-types'
import { jsdocNoUndefinedTypes } from './jsdoc/no-undefined-types'
import { jsdocRequireDescription } from './jsdoc/require-description'
import { jsdocRequireDescriptionCompleteSentence } from './jsdoc/require-description-complete-sentence'
import { jsdocRequireExample } from './jsdoc/require-example'
import { jsdocRequireFileOverview } from './jsdoc/require-file-overview'
import { jsdocRequireHyphenBeforeParamDescription } from './jsdoc/require-hyphen-before-param-description'
import { jsdocRequireJsdoc } from './jsdoc/require-jsdoc'
import { jsdocRequireParam } from './jsdoc/require-param'
import { jsdocRequireParamDescription } from './jsdoc/require-param-description'
import { jsdocRequireParamName } from './jsdoc/require-param-name'
import { jsdocRequireParamType } from './jsdoc/require-param-type'
import { jsdocRequireProperty } from './jsdoc/require-property'
import { jsdocRequirePropertyDescription } from './jsdoc/require-property-description'
import { jsdocRequirePropertyName } from './jsdoc/require-property-name'
import { jsdocRequirePropertyType } from './jsdoc/require-property-type'
import { jsdocRequireReturns } from './jsdoc/require-returns'
import { jsdocRequireReturnsCheck } from './jsdoc/require-returns-check'
import { jsdocRequireReturnsDescription } from './jsdoc/require-returns-description'
import { jsdocRequireReturnsType } from './jsdoc/require-returns-type'
import { jsdocRequireThrows } from './jsdoc/require-throws'
import { jsdocValidTypes } from './jsdoc/valid-types'
import { reactBooleanPropNaming } from './react/boolean-prop-naming'
import { reactButtonHasType } from './react/button-has-type'
import { reactDefaultPropsMatchPropTypes } from './react/default-props-match-prop-types'
import { reactDestructuringAssignment } from './react/destructuring-assignment'
import { reactDisplayName } from './react/display-name'
import { reactForbidComponentProps } from './react/forbid-component-props'
import { reactForbidDomProps } from './react/forbid-dom-props'
import { reactForbidElements } from './react/forbid-elements'
import { reactForbidForeignPropTypes } from './react/forbid-foreign-prop-types'
import { reactForbidPropTypes } from './react/forbid-prop-types'
import { reactFunctionComponentDefinition } from './react/function-component-definition'
import { reactJsxBooleanValue } from './react/jsx-boolean-value'
import { reactJsxChildElementSpacing } from './react/jsx-child-element-spacing'
import { reactJsxClosingBracketLocation } from './react/jsx-closing-bracket-location'
import { reactJsxClosingTagLocation } from './react/jsx-closing-tag-location'
import { reactJsxCurlySpacing } from './react/jsx-curly-spacing'
import { reactJsxCurlyNewline } from './react/jsx-curly-newline'
import { reactJsxEqualsSpacing } from './react/jsx-equals-spacing'
import { reactJsxFilenameExtension } from './react/jsx-filename-extension'
import { reactJsxFirstPropNewLine } from './react/jsx-first-prop-new-line'
import { reactJsxHandlerNames } from './react/jsx-handler-names'
import { reactJsxIndent } from './react/jsx-indent'
import { reactJsxIndentProps } from './react/jsx-indent-props'
import { reactJsxKey } from './react/jsx-key'
import { reactJsxMaxDepth } from './react/jsx-max-depth'
import { reactJsxMaxPropsPerLine } from './react/jsx-max-props-per-line'
import { reactJsxNoBind } from './react/jsx-no-bind'
import { reactJsxNoCommentTextnodes } from './react/jsx-no-comment-textnodes'
import { reactJsxNoDuplicateProps } from './react/jsx-no-duplicate-props'
import { reactJsxNoLiterals } from './react/jsx-no-literals'
import { reactJsxNoScriptUrl } from './react/jsx-no-script-url'
import { reactJsxNoTargetBlank } from './react/jsx-no-target-blank'
import { reactJsxNoUselessFragment } from './react/jsx-no-useless-fragment'
import { reactJsxOneExpressionPerLine } from './react/jsx-one-expression-per-line'
import { reactJsxNoUndef } from './react/jsx-no-undef'
import { reactJsxCurlyBracePresence } from './react/jsx-curly-brace-presence'
import { reactJsxPascalCase } from './react/jsx-pascal-case'
import { reactJsxFragments } from './react/jsx-fragments'
import { reactJsxPropsNoMultiSpaces } from './react/jsx-props-no-multi-spaces'
import { reactJsxPropsNoSpreading } from './react/jsx-props-no-spreading'
import { reactJsxSortDefaultProps } from './react/jsx-sort-default-props'
import { reactJsxSortProps } from './react/jsx-sort-props'
import { reactJsxSpaceBeforeClosing } from './react/jsx-space-before-closing'
import { reactJsxTagSpacing } from './react/jsx-tag-spacing'
import { reactJsxUsesReact } from './react/jsx-uses-react'
import { reactJsxUsesVars } from './react/jsx-uses-vars'
import { reactJsxWrapMultilines } from './react/jsx-wrap-multilines'
import { reactNoAccessStateInSetstate } from './react/no-access-state-in-setstate'
import { reactNoAdjacentInlineElements } from './react/no-adjacent-inline-elements'
import { reactNoArrayIndexKey } from './react/no-array-index-key'
import { reactNoChildrenProp } from './react/no-children-prop'
import { reactNoDanger } from './react/no-danger'
import { reactNoDangerWithChildren } from './react/no-danger-with-children'
import { reactNoDeprecated } from './react/no-deprecated'
import { reactNoDidMountSetState } from './react/no-did-mount-set-state'
import { reactNoDidUpdateSetState } from './react/no-did-update-set-state'
import { reactNoDirectMutationState } from './react/no-direct-mutation-state'
import { reactNoFindDomNode } from './react/no-find-dom-node'
import { reactNoIsMounted } from './react/no-is-mounted'
import { reactNoMultiComp } from './react/no-multi-comp'
import { reactNoSetState } from './react/no-set-state'
import { reactNoStringRefs } from './react/no-string-refs'
import { reactNoRedundantShouldComponentUpdate } from './react/no-redundant-should-component-update'
import { reactNoRenderReturnValue } from './react/no-render-return-value'
import { reactNoThisInSfc } from './react/no-this-in-sfc'
import { reactNoTypos } from './react/no-typos'
import { reactNoUnescapedEntities } from './react/no-unescaped-entities'
import { reactNoUnknownProperty } from './react/no-unknown-property'
import { reactNoUnsafe } from './react/no-unsafe'
import { reactNoUnusedPropTypes } from './react/no-unused-prop-types'
import { reactNoUnusedState } from './react/no-unused-state'
import { reactNoWillUpdateSetState } from './react/no-will-update-set-state'
import { reactPreferEs6Class } from './react/prefer-es-6-class'
import { reactPreferReadOnlyProps } from './react/prefer-read-only-props'
import { reactPreferStatelessFunction } from './react/prefer-stateless-function'
import { reactPropTypes } from './react/prop-types'
import { reactReactInJsxScope } from './react/react-in-jsx-scope'
import { reactRequireDefaultProps } from './react/require-default-props'
import { reactRequireOptimization } from './react/require-optimization'
import { reactRequireRenderReturn } from './react/require-render-return'
import { reactSelfClosingComp } from './react/self-closing-comp'
import { reactSortComp } from './react/sort-comp'
import { reactSortPropTypes } from './react/sort-prop-types'
import { reactStateInConstructor } from './react/state-in-constructor'
import { reactStaticPropertyPlacement } from './react/static-property-placement'
import { reactStylePropObject } from './react/style-prop-object'
import { reactVoidDomElementsNoChildren } from './react/void-dom-elements-no-children'
import { reactHooksRulesOfHooks } from './react-hooks/rules-of-hooks'
import { reactHooksExhaustiveDeps } from './react-hooks/exhaustive-deps'
import { regexInvalid } from './regex/invalid'
import { regexRequired } from './regex/required'
import { typescriptCustomSortKeysInterface } from './typescript-custom-sort-keys/interface'
import { typescriptCustomSortKeysStringEnum } from './typescript-custom-sort-keys/string-enum'
import { unusedImportsNoUnusedImportsTs } from './unused-imports/no-unused-imports-ts'
import { unusedImportsNoUnusedImports } from './unused-imports/no-unused-imports'
import { unusedImportsNoUnusedVarsTs } from './unused-imports/no-unused-vars-ts'
import { unusedImportsNoUnusedVars } from './unused-imports/no-unused-vars'
import { unusedImportsPredicates } from './unused-imports/predicates'

export default [
	accessorPairs,
	arrayBracketNewline,
	arrayBracketSpacing,
	arrayCallbackReturn,
	arrayElementNewline,
	arrowBodyStyle,
	arrowParens,
	arrowSpacing,
	blockScopedVar,
	blockSpacing,
	braceStyle,
	callbackReturn,
	camelcase,
	capitalizedComments,
	classMethodsUseThis,
	commaDangle,
	commaSpacing,
	commaStyle,
	complexity,
	computedPropertySpacing,
	consistentReturn,
	consistentThis,
	constructorSuper,
	curly,
	defaultCase,
	defaultCaseLast,
	defaultParamLast,
	dotLocation,
	dotNotation,
	eolLast,
	eqeqeq,
	forDirection,
	funcCallSpacing,
	funcNameMatching,
	funcNames,
	funcStyle,
	functionCallArgumentNewline,
	functionParenNewline,
	generatorStarSpacing,
	getterReturn,
	globalRequire,
	groupedAccessorPairs,
	guardForIn,
	handleCallbackErr,
	idBlacklist,
	idDenylist,
	idLength,
	idMatch,
	implicitArrowLinebreak,
	indent,
	indentLegacy,
	initDeclarations,
	jsxQuotes,
	keySpacing,
	keywordSpacing,
	lineCommentPosition,
	linebreakStyle,
	linesAroundComment,
	linesAroundDirective,
	linesBetweenClassMembers,
	maxClassesPerFile,
	maxDepth,
	maxLen,
	maxLines,
	maxLinesPerFunction,
	maxNestedCallbacks,
	maxParams,
	maxStatements,
	maxStatementsPerLine,
	multilineCommentStyle,
	multilineTernary,
	newCap,
	newParens,
	newlineAfterVar,
	newlineBeforeReturn,
	newlinePerChainedCall,
	noAlert,
	noArrayConstructor,
	noAsyncPromiseExecutor,
	noAwaitInLoop,
	noBitwise,
	noBufferConstructor,
	noCaller,
	noCaseDeclarations,
	noCatchShadow,
	noClassAssign,
	noCompareNegZero,
	noCondAssign,
	noConfusingArrow,
	noConsole,
	noConstAssign,
	noConstantCondition,
	noConstructorReturn,
	noContinue,
	noControlRegex,
	noDebugger,
	noDeleteVar,
	noDivRegex,
	noDupeArgs,
	noDupeClassMembers,
	noDupeElseIf,
	noDupeKeys,
	noDuplicateCase,
	noDuplicateImports,
	noElseReturn,
	noEmpty,
	noEmptyCharacterClass,
	noEmptyFunction,
	noEmptyPattern,
	noEqNull,
	noEval,
	noExAssign,
	noExtendNative,
	noExtraBind,
	noExtraBooleanCast,
	noExtraLabel,
	noExtraParens,
	noExtraSemi,
	noFallthrough,
	noFloatingDecimal,
	noFuncAssign,
	noGlobalAssign,
	noImplicitCoercion,
	noImplicitGlobals,
	noImpliedEval,
	noImportAssign,
	noInlineComments,
	noInnerDeclarations,
	noInvalidRegexp,
	noInvalidThis,
	noIrregularWhitespace,
	noIterator,
	noLabelVar,
	noLabels,
	noLoneBlocks,
	noLonelyIf,
	noLoopFunc,
	noLossOfPrecision,
	noMagicNumbers,
	noMisleadingCharacterClass,
	noMixedOperators,
	noMixedRequires,
	noMixedSpacesAndTabs,
	noMultiAssign,
	noMultiSpaces,
	noMultiStr,
	noMultipleEmptyLines,
	noNativeReassign,
	noNegatedCondition,
	noNegatedInLhs,
	noNestedTernary,
	noNew,
	noNewFunc,
	noNewObject,
	noNewRequire,
	noNewSymbol,
	noNewWrappers,
	noNonoctalDecimalEscape,
	noObjCalls,
	noOctal,
	noOctalEscape,
	noParamReassign,
	noPathConcat,
	noPlusplus,
	noProcessEnv,
	noProcessExit,
	noPromiseExecutorReturn,
	noProto,
	noPrototypeBuiltins,
	noRedeclare,
	noRegexSpaces,
	noRestrictedExports,
	noRestrictedGlobals,
	noRestrictedImports,
	noRestrictedModules,
	noRestrictedProperties,
	noRestrictedSyntax,
	noReturnAssign,
	noReturnAwait,
	noScriptUrl,
	noSelfAssign,
	noSelfCompare,
	noSequences,
	noSetterReturn,
	noShadow,
	noShadowRestrictedNames,
	noSpacedFunc,
	noSparseArrays,
	noSync,
	noTabs,
	noTemplateCurlyInString,
	noTernary,
	noThisBeforeSuper,
	noThrowLiteral,
	noTrailingSpaces,
	noUndef,
	noUndefInit,
	noUndefined,
	noUnderscoreDangle,
	noUnexpectedMultiline,
	noUnmodifiedLoopCondition,
	noUnneededTernary,
	noUnreachable,
	noUnreachableLoop,
	noUnsafeFinally,
	noUnsafeNegation,
	noUnusedExpressions,
	noUnusedLabels,
	noUnusedVars,
	noUseBeforeDefine,
	noUselessBackreference,
	noUselessCall,
	noUselessCatch,
	noUselessComputedKey,
	noUselessConcat,
	noUselessConstructor,
	noUselessEscape,
	noUselessRename,
	noUselessReturn,
	noVar,
	noVoid,
	noWarningComments,
	noWhitespaceBeforeProperty,
	noWith,
	nonblockStatementBodyPosition,
	objectCurlyNewline,
	objectCurlySpacing,
	objectPropertyNewline,
	objectShorthand,
	oneVar,
	oneVarDeclarationPerLine,
	operatorAssignment,
	operatorLinebreak,
	paddedBlocks,
	paddingLineBetweenStatements,
	preferArrowCallback,
	preferConst,
	preferDestructuring,
	preferExponentiationOperator,
	preferNamedCaptureGroup,
	preferNumericLiterals,
	preferObjectSpread,
	preferPromiseRejectErrors,
	preferReflect,
	preferRegexLiterals,
	preferRestParams,
	preferSpread,
	preferTemplate,
	quoteProps,
	quotes,
	radix,
	requireAtomicUpdates,
	requireAwait,
	requireJsdoc,
	requireUnicodeRegexp,
	requireYield,
	restSpreadSpacing,
	semi,
	semiSpacing,
	semiStyle,
	sortImports,
	sortKeys,
	sortVars,
	spaceBeforeBlocks,
	spaceBeforeFunctionParen,
	spaceInParens,
	spaceInfixOps,
	spaceUnaryOps,
	spacedComment,
	strict,
	switchColonSpacing,
	symbolDescription,
	templateCurlySpacing,
	templateTagSpacing,
	unicodeBom,
	useIsnan,
	validJsdoc,
	validTypeof,
	varsOnTop,
	wrapIife,
	wrapRegex,
	yieldStarSpacing,
	yoda,
	typescriptEslintAdjacentOverloadSignatures,
	typescriptEslintArrayType,
	typescriptEslintAwaitThenable,
	typescriptEslintBanTsComment,
	typescriptEslintBanTslintComment,
	typescriptEslintBanTypes,
	typescriptEslintBraceStyle,
	typescriptEslintClassLiteralPropertyStyle,
	typescriptEslintCommaDangle,
	typescriptEslintCommaSpacing,
	typescriptEslintConsistentIndexedObjectStyle,
	typescriptEslintConsistentTypeAssertions,
	typescriptEslintConsistentTypeDefinitions,
	typescriptEslintConsistentTypeImports,
	typescriptEslintDefaultParamLast,
	typescriptEslintDotNotation,
	typescriptEslintExplicitFunctionReturnType,
	typescriptEslintExplicitMemberAccessibility,
	typescriptEslintExplicitModuleBoundaryTypes,
	typescriptEslintFuncCallSpacing,
	typescriptEslintIndent,
	typescriptEslintInitDeclarations,
	typescriptEslintKeywordSpacing,
	typescriptEslintLinesBetweenClassMembers,
	typescriptEslintMemberDelimiterStyle,
	typescriptEslintMemberOrdering,
	typescriptEslintMethodSignatureStyle,
	typescriptEslintNamingConvention,
	typescriptEslintNoArrayConstructor,
	typescriptEslintNoBaseToString,
	typescriptEslintNoConfusingNonNullAssertion,
	typescriptEslintNoConfusingVoidExpression,
	typescriptEslintNoDupeClassMembers,
	typescriptEslintNoDuplicateImports,
	typescriptEslintNoDynamicDelete,
	typescriptEslintNoEmptyFunction,
	typescriptEslintNoEmptyInterface,
	typescriptEslintNoExplicitAny,
	typescriptEslintNoExtraNonNullAssertion,
	typescriptEslintNoExtraParens,
	typescriptEslintNoExtraSemi,
	typescriptEslintNoExtraneousClass,
	typescriptEslintNoFloatingPromises,
	typescriptEslintNoForInArray,
	typescriptEslintNoImplicitAnyCatch,
	typescriptEslintNoImpliedEval,
	typescriptEslintNoInferrableTypes,
	typescriptEslintNoInvalidThis,
	typescriptEslintNoInvalidVoidType,
	typescriptEslintNoLoopFunc,
	typescriptEslintNoLossOfPrecision,
	typescriptEslintNoMagicNumbers,
	typescriptEslintNoMisusedNew,
	typescriptEslintNoMisusedPromises,
	typescriptEslintNoNamespace,
	typescriptEslintNoNonNullAssertedOptionalChain,
	typescriptEslintNoNonNullAssertion,
	typescriptEslintNoParameterProperties,
	typescriptEslintNoRedeclare,
	typescriptEslintNoRequireImports,
	typescriptEslintNoShadow,
	typescriptEslintNoThisAlias,
	typescriptEslintNoThrowLiteral,
	typescriptEslintNoTypeAlias,
	typescriptEslintNoUnnecessaryBooleanLiteralCompare,
	typescriptEslintNoUnnecessaryCondition,
	typescriptEslintNoUnnecessaryQualifier,
	typescriptEslintNoUnnecessaryTypeArguments,
	typescriptEslintNoUnnecessaryTypeAssertion,
	typescriptEslintNoUnnecessaryTypeConstraint,
	typescriptEslintNoUnsafeAssignment,
	typescriptEslintNoUnsafeCall,
	typescriptEslintNoUnsafeMemberAccess,
	typescriptEslintNoUnsafeReturn,
	typescriptEslintNoUnusedExpressions,
	typescriptEslintNoUnusedVars,
	typescriptEslintNoUnusedVarsExperimental,
	typescriptEslintNoUseBeforeDefine,
	typescriptEslintNoUselessConstructor,
	typescriptEslintNoVarRequires,
	typescriptEslintPreferAsConst,
	typescriptEslintPreferEnumInitializers,
	typescriptEslintPreferForOf,
	typescriptEslintPreferFunctionType,
	typescriptEslintPreferIncludes,
	typescriptEslintPreferLiteralEnumMember,
	typescriptEslintPreferNamespaceKeyword,
	typescriptEslintPreferNullishCoalescing,
	typescriptEslintPreferOptionalChain,
	typescriptEslintPreferReadonly,
	typescriptEslintPreferReadonlyParameterTypes,
	typescriptEslintPreferReduceTypeParameter,
	typescriptEslintPreferRegexpExec,
	typescriptEslintPreferStringStartsEndsWith,
	typescriptEslintPreferTsExpectError,
	typescriptEslintPromiseFunctionAsync,
	typescriptEslintQuotes,
	typescriptEslintRequireArraySortCompare,
	typescriptEslintRequireAwait,
	typescriptEslintRestrictPlusOperands,
	typescriptEslintRestrictTemplateExpressions,
	typescriptEslintReturnAwait,
	typescriptEslintSemi,
	typescriptEslintSpaceBeforeFunctionParen,
	typescriptEslintSpaceInfixOps,
	typescriptEslintStrictBooleanExpressions,
	typescriptEslintSwitchExhaustivenessCheck,
	typescriptEslintTripleSlashReference,
	typescriptEslintTypeAnnotationSpacing,
	typescriptEslintTypedef,
	typescriptEslintUnboundMethod,
	typescriptEslintUnifiedSignatures,
	importNoUnresolved,
	importNamed,
	importDefault,
	importNamespace,
	importNoNamespace,
	importExport,
	importNoMutableExports,
	importExtensions,
	importNoRestrictedPaths,
	importNoInternalModules,
	importGroupExports,
	importNoRelativeParentImports,
	importNoSelfImport,
	importNoCycle,
	importNoNamedDefault,
	importNoNamedAsDefault,
	importNoNamedAsDefaultMember,
	importNoAnonymousDefaultExport,
	importNoUnusedModules,
	importNoCommonjs,
	importNoAmd,
	importNoDuplicates,
	importFirst,
	importMaxDependencies,
	importNoExtraneousDependencies,
	importNoAbsolutePath,
	importNoNodejsModules,
	importNoWebpackLoaderSyntax,
	importOrder,
	importNewlineAfterImport,
	importPreferDefaultExport,
	importNoDefaultExport,
	importNoNamedExport,
	importNoDynamicRequire,
	importUnambiguous,
	importNoUnassignedImport,
	importNoUselessPathSegments,
	importDynamicImportChunkname,
	importExportsLast,
	importNoDeprecated,
	importImportsFirst,
	jsdocCheckAccess,
	jsdocCheckAlignment,
	jsdocCheckExamples,
	jsdocCheckIndentation,
	jsdocCheckLineAlignment,
	jsdocCheckParamNames,
	jsdocCheckPropertyNames,
	jsdocCheckSyntax,
	jsdocCheckTagNames,
	jsdocCheckTypes,
	jsdocCheckValues,
	jsdocEmptyTags,
	jsdocImplementsOnClasses,
	jsdocMatchDescription,
	jsdocNewlineAfterDescription,
	jsdocNoBadBlocks,
	jsdocNoDefaults,
	jsdocNoTypes,
	jsdocNoUndefinedTypes,
	jsdocRequireDescription,
	jsdocRequireDescriptionCompleteSentence,
	jsdocRequireExample,
	jsdocRequireFileOverview,
	jsdocRequireHyphenBeforeParamDescription,
	jsdocRequireJsdoc,
	jsdocRequireParam,
	jsdocRequireParamDescription,
	jsdocRequireParamName,
	jsdocRequireParamType,
	jsdocRequireProperty,
	jsdocRequirePropertyDescription,
	jsdocRequirePropertyName,
	jsdocRequirePropertyType,
	jsdocRequireReturns,
	jsdocRequireReturnsCheck,
	jsdocRequireReturnsDescription,
	jsdocRequireReturnsType,
	jsdocRequireThrows,
	jsdocValidTypes,
	reactBooleanPropNaming,
	reactButtonHasType,
	reactDefaultPropsMatchPropTypes,
	reactDestructuringAssignment,
	reactDisplayName,
	reactForbidComponentProps,
	reactForbidDomProps,
	reactForbidElements,
	reactForbidForeignPropTypes,
	reactForbidPropTypes,
	reactFunctionComponentDefinition,
	reactJsxBooleanValue,
	reactJsxChildElementSpacing,
	reactJsxClosingBracketLocation,
	reactJsxClosingTagLocation,
	reactJsxCurlySpacing,
	reactJsxCurlyNewline,
	reactJsxEqualsSpacing,
	reactJsxFilenameExtension,
	reactJsxFirstPropNewLine,
	reactJsxHandlerNames,
	reactJsxIndent,
	reactJsxIndentProps,
	reactJsxKey,
	reactJsxMaxDepth,
	reactJsxMaxPropsPerLine,
	reactJsxNoBind,
	reactJsxNoCommentTextnodes,
	reactJsxNoDuplicateProps,
	reactJsxNoLiterals,
	reactJsxNoScriptUrl,
	reactJsxNoTargetBlank,
	reactJsxNoUselessFragment,
	reactJsxOneExpressionPerLine,
	reactJsxNoUndef,
	reactJsxCurlyBracePresence,
	reactJsxPascalCase,
	reactJsxFragments,
	reactJsxPropsNoMultiSpaces,
	reactJsxPropsNoSpreading,
	reactJsxSortDefaultProps,
	reactJsxSortProps,
	reactJsxSpaceBeforeClosing,
	reactJsxTagSpacing,
	reactJsxUsesReact,
	reactJsxUsesVars,
	reactJsxWrapMultilines,
	reactNoAccessStateInSetstate,
	reactNoAdjacentInlineElements,
	reactNoArrayIndexKey,
	reactNoChildrenProp,
	reactNoDanger,
	reactNoDangerWithChildren,
	reactNoDeprecated,
	reactNoDidMountSetState,
	reactNoDidUpdateSetState,
	reactNoDirectMutationState,
	reactNoFindDomNode,
	reactNoIsMounted,
	reactNoMultiComp,
	reactNoSetState,
	reactNoStringRefs,
	reactNoRedundantShouldComponentUpdate,
	reactNoRenderReturnValue,
	reactNoThisInSfc,
	reactNoTypos,
	reactNoUnescapedEntities,
	reactNoUnknownProperty,
	reactNoUnsafe,
	reactNoUnusedPropTypes,
	reactNoUnusedState,
	reactNoWillUpdateSetState,
	reactPreferEs6Class,
	reactPreferReadOnlyProps,
	reactPreferStatelessFunction,
	reactPropTypes,
	reactReactInJsxScope,
	reactRequireDefaultProps,
	reactRequireOptimization,
	reactRequireRenderReturn,
	reactSelfClosingComp,
	reactSortComp,
	reactSortPropTypes,
	reactStateInConstructor,
	reactStaticPropertyPlacement,
	reactStylePropObject,
	reactVoidDomElementsNoChildren,
	reactHooksRulesOfHooks,
	reactHooksExhaustiveDeps,
	regexInvalid,
	regexRequired,
	typescriptCustomSortKeysInterface,
	typescriptCustomSortKeysStringEnum,
	unusedImportsNoUnusedImportsTs,
	unusedImportsNoUnusedImports,
	unusedImportsNoUnusedVarsTs,
	unusedImportsNoUnusedVars,
	unusedImportsPredicates
]

export {
	accessorPairs,
	arrayBracketNewline,
	arrayBracketSpacing,
	arrayCallbackReturn,
	arrayElementNewline,
	arrowBodyStyle,
	arrowParens,
	arrowSpacing,
	blockScopedVar,
	blockSpacing,
	braceStyle,
	callbackReturn,
	camelcase,
	capitalizedComments,
	classMethodsUseThis,
	commaDangle,
	commaSpacing,
	commaStyle,
	complexity,
	computedPropertySpacing,
	consistentReturn,
	consistentThis,
	constructorSuper,
	curly,
	defaultCase,
	defaultCaseLast,
	defaultParamLast,
	dotLocation,
	dotNotation,
	eolLast,
	eqeqeq,
	forDirection,
	funcCallSpacing,
	funcNameMatching,
	funcNames,
	funcStyle,
	functionCallArgumentNewline,
	functionParenNewline,
	generatorStarSpacing,
	getterReturn,
	globalRequire,
	groupedAccessorPairs,
	guardForIn,
	handleCallbackErr,
	idBlacklist,
	idDenylist,
	idLength,
	idMatch,
	implicitArrowLinebreak,
	indent,
	indentLegacy,
	initDeclarations,
	jsxQuotes,
	keySpacing,
	keywordSpacing,
	lineCommentPosition,
	linebreakStyle,
	linesAroundComment,
	linesAroundDirective,
	linesBetweenClassMembers,
	maxClassesPerFile,
	maxDepth,
	maxLen,
	maxLines,
	maxLinesPerFunction,
	maxNestedCallbacks,
	maxParams,
	maxStatements,
	maxStatementsPerLine,
	multilineCommentStyle,
	multilineTernary,
	newCap,
	newParens,
	newlineAfterVar,
	newlineBeforeReturn,
	newlinePerChainedCall,
	noAlert,
	noArrayConstructor,
	noAsyncPromiseExecutor,
	noAwaitInLoop,
	noBitwise,
	noBufferConstructor,
	noCaller,
	noCaseDeclarations,
	noCatchShadow,
	noClassAssign,
	noCompareNegZero,
	noCondAssign,
	noConfusingArrow,
	noConsole,
	noConstAssign,
	noConstantCondition,
	noConstructorReturn,
	noContinue,
	noControlRegex,
	noDebugger,
	noDeleteVar,
	noDivRegex,
	noDupeArgs,
	noDupeClassMembers,
	noDupeElseIf,
	noDupeKeys,
	noDuplicateCase,
	noDuplicateImports,
	noElseReturn,
	noEmpty,
	noEmptyCharacterClass,
	noEmptyFunction,
	noEmptyPattern,
	noEqNull,
	noEval,
	noExAssign,
	noExtendNative,
	noExtraBind,
	noExtraBooleanCast,
	noExtraLabel,
	noExtraParens,
	noExtraSemi,
	noFallthrough,
	noFloatingDecimal,
	noFuncAssign,
	noGlobalAssign,
	noImplicitCoercion,
	noImplicitGlobals,
	noImpliedEval,
	noImportAssign,
	noInlineComments,
	noInnerDeclarations,
	noInvalidRegexp,
	noInvalidThis,
	noIrregularWhitespace,
	noIterator,
	noLabelVar,
	noLabels,
	noLoneBlocks,
	noLonelyIf,
	noLoopFunc,
	noLossOfPrecision,
	noMagicNumbers,
	noMisleadingCharacterClass,
	noMixedOperators,
	noMixedRequires,
	noMixedSpacesAndTabs,
	noMultiAssign,
	noMultiSpaces,
	noMultiStr,
	noMultipleEmptyLines,
	noNativeReassign,
	noNegatedCondition,
	noNegatedInLhs,
	noNestedTernary,
	noNew,
	noNewFunc,
	noNewObject,
	noNewRequire,
	noNewSymbol,
	noNewWrappers,
	noNonoctalDecimalEscape,
	noObjCalls,
	noOctal,
	noOctalEscape,
	noParamReassign,
	noPathConcat,
	noPlusplus,
	noProcessEnv,
	noProcessExit,
	noPromiseExecutorReturn,
	noProto,
	noPrototypeBuiltins,
	noRedeclare,
	noRegexSpaces,
	noRestrictedExports,
	noRestrictedGlobals,
	noRestrictedImports,
	noRestrictedModules,
	noRestrictedProperties,
	noRestrictedSyntax,
	noReturnAssign,
	noReturnAwait,
	noScriptUrl,
	noSelfAssign,
	noSelfCompare,
	noSequences,
	noSetterReturn,
	noShadow,
	noShadowRestrictedNames,
	noSpacedFunc,
	noSparseArrays,
	noSync,
	noTabs,
	noTemplateCurlyInString,
	noTernary,
	noThisBeforeSuper,
	noThrowLiteral,
	noTrailingSpaces,
	noUndef,
	noUndefInit,
	noUndefined,
	noUnderscoreDangle,
	noUnexpectedMultiline,
	noUnmodifiedLoopCondition,
	noUnneededTernary,
	noUnreachable,
	noUnreachableLoop,
	noUnsafeFinally,
	noUnsafeNegation,
	noUnusedExpressions,
	noUnusedLabels,
	noUnusedVars,
	noUseBeforeDefine,
	noUselessBackreference,
	noUselessCall,
	noUselessCatch,
	noUselessComputedKey,
	noUselessConcat,
	noUselessConstructor,
	noUselessEscape,
	noUselessRename,
	noUselessReturn,
	noVar,
	noVoid,
	noWarningComments,
	noWhitespaceBeforeProperty,
	noWith,
	nonblockStatementBodyPosition,
	objectCurlyNewline,
	objectCurlySpacing,
	objectPropertyNewline,
	objectShorthand,
	oneVar,
	oneVarDeclarationPerLine,
	operatorAssignment,
	operatorLinebreak,
	paddedBlocks,
	paddingLineBetweenStatements,
	preferArrowCallback,
	preferConst,
	preferDestructuring,
	preferExponentiationOperator,
	preferNamedCaptureGroup,
	preferNumericLiterals,
	preferObjectSpread,
	preferPromiseRejectErrors,
	preferReflect,
	preferRegexLiterals,
	preferRestParams,
	preferSpread,
	preferTemplate,
	quoteProps,
	quotes,
	radix,
	requireAtomicUpdates,
	requireAwait,
	requireJsdoc,
	requireUnicodeRegexp,
	requireYield,
	restSpreadSpacing,
	semi,
	semiSpacing,
	semiStyle,
	sortImports,
	sortKeys,
	sortVars,
	spaceBeforeBlocks,
	spaceBeforeFunctionParen,
	spaceInParens,
	spaceInfixOps,
	spaceUnaryOps,
	spacedComment,
	strict,
	switchColonSpacing,
	symbolDescription,
	templateCurlySpacing,
	templateTagSpacing,
	unicodeBom,
	useIsnan,
	validJsdoc,
	validTypeof,
	varsOnTop,
	wrapIife,
	wrapRegex,
	yieldStarSpacing,
	yoda,
	typescriptEslintAdjacentOverloadSignatures,
	typescriptEslintArrayType,
	typescriptEslintAwaitThenable,
	typescriptEslintBanTsComment,
	typescriptEslintBanTslintComment,
	typescriptEslintBanTypes,
	typescriptEslintBraceStyle,
	typescriptEslintClassLiteralPropertyStyle,
	typescriptEslintCommaDangle,
	typescriptEslintCommaSpacing,
	typescriptEslintConsistentIndexedObjectStyle,
	typescriptEslintConsistentTypeAssertions,
	typescriptEslintConsistentTypeDefinitions,
	typescriptEslintConsistentTypeImports,
	typescriptEslintDefaultParamLast,
	typescriptEslintDotNotation,
	typescriptEslintExplicitFunctionReturnType,
	typescriptEslintExplicitMemberAccessibility,
	typescriptEslintExplicitModuleBoundaryTypes,
	typescriptEslintFuncCallSpacing,
	typescriptEslintIndent,
	typescriptEslintInitDeclarations,
	typescriptEslintKeywordSpacing,
	typescriptEslintLinesBetweenClassMembers,
	typescriptEslintMemberDelimiterStyle,
	typescriptEslintMemberOrdering,
	typescriptEslintMethodSignatureStyle,
	typescriptEslintNamingConvention,
	typescriptEslintNoArrayConstructor,
	typescriptEslintNoBaseToString,
	typescriptEslintNoConfusingNonNullAssertion,
	typescriptEslintNoConfusingVoidExpression,
	typescriptEslintNoDupeClassMembers,
	typescriptEslintNoDuplicateImports,
	typescriptEslintNoDynamicDelete,
	typescriptEslintNoEmptyFunction,
	typescriptEslintNoEmptyInterface,
	typescriptEslintNoExplicitAny,
	typescriptEslintNoExtraNonNullAssertion,
	typescriptEslintNoExtraParens,
	typescriptEslintNoExtraSemi,
	typescriptEslintNoExtraneousClass,
	typescriptEslintNoFloatingPromises,
	typescriptEslintNoForInArray,
	typescriptEslintNoImplicitAnyCatch,
	typescriptEslintNoImpliedEval,
	typescriptEslintNoInferrableTypes,
	typescriptEslintNoInvalidThis,
	typescriptEslintNoInvalidVoidType,
	typescriptEslintNoLoopFunc,
	typescriptEslintNoLossOfPrecision,
	typescriptEslintNoMagicNumbers,
	typescriptEslintNoMisusedNew,
	typescriptEslintNoMisusedPromises,
	typescriptEslintNoNamespace,
	typescriptEslintNoNonNullAssertedOptionalChain,
	typescriptEslintNoNonNullAssertion,
	typescriptEslintNoParameterProperties,
	typescriptEslintNoRedeclare,
	typescriptEslintNoRequireImports,
	typescriptEslintNoShadow,
	typescriptEslintNoThisAlias,
	typescriptEslintNoThrowLiteral,
	typescriptEslintNoTypeAlias,
	typescriptEslintNoUnnecessaryBooleanLiteralCompare,
	typescriptEslintNoUnnecessaryCondition,
	typescriptEslintNoUnnecessaryQualifier,
	typescriptEslintNoUnnecessaryTypeArguments,
	typescriptEslintNoUnnecessaryTypeAssertion,
	typescriptEslintNoUnnecessaryTypeConstraint,
	typescriptEslintNoUnsafeAssignment,
	typescriptEslintNoUnsafeCall,
	typescriptEslintNoUnsafeMemberAccess,
	typescriptEslintNoUnsafeReturn,
	typescriptEslintNoUnusedExpressions,
	typescriptEslintNoUnusedVars,
	typescriptEslintNoUnusedVarsExperimental,
	typescriptEslintNoUseBeforeDefine,
	typescriptEslintNoUselessConstructor,
	typescriptEslintNoVarRequires,
	typescriptEslintPreferAsConst,
	typescriptEslintPreferEnumInitializers,
	typescriptEslintPreferForOf,
	typescriptEslintPreferFunctionType,
	typescriptEslintPreferIncludes,
	typescriptEslintPreferLiteralEnumMember,
	typescriptEslintPreferNamespaceKeyword,
	typescriptEslintPreferNullishCoalescing,
	typescriptEslintPreferOptionalChain,
	typescriptEslintPreferReadonly,
	typescriptEslintPreferReadonlyParameterTypes,
	typescriptEslintPreferReduceTypeParameter,
	typescriptEslintPreferRegexpExec,
	typescriptEslintPreferStringStartsEndsWith,
	typescriptEslintPreferTsExpectError,
	typescriptEslintPromiseFunctionAsync,
	typescriptEslintQuotes,
	typescriptEslintRequireArraySortCompare,
	typescriptEslintRequireAwait,
	typescriptEslintRestrictPlusOperands,
	typescriptEslintRestrictTemplateExpressions,
	typescriptEslintReturnAwait,
	typescriptEslintSemi,
	typescriptEslintSpaceBeforeFunctionParen,
	typescriptEslintSpaceInfixOps,
	typescriptEslintStrictBooleanExpressions,
	typescriptEslintSwitchExhaustivenessCheck,
	typescriptEslintTripleSlashReference,
	typescriptEslintTypeAnnotationSpacing,
	typescriptEslintTypedef,
	typescriptEslintUnboundMethod,
	typescriptEslintUnifiedSignatures,
	importNoUnresolved,
	importNamed,
	importDefault,
	importNamespace,
	importNoNamespace,
	importExport,
	importNoMutableExports,
	importExtensions,
	importNoRestrictedPaths,
	importNoInternalModules,
	importGroupExports,
	importNoRelativeParentImports,
	importNoSelfImport,
	importNoCycle,
	importNoNamedDefault,
	importNoNamedAsDefault,
	importNoNamedAsDefaultMember,
	importNoAnonymousDefaultExport,
	importNoUnusedModules,
	importNoCommonjs,
	importNoAmd,
	importNoDuplicates,
	importFirst,
	importMaxDependencies,
	importNoExtraneousDependencies,
	importNoAbsolutePath,
	importNoNodejsModules,
	importNoWebpackLoaderSyntax,
	importOrder,
	importNewlineAfterImport,
	importPreferDefaultExport,
	importNoDefaultExport,
	importNoNamedExport,
	importNoDynamicRequire,
	importUnambiguous,
	importNoUnassignedImport,
	importNoUselessPathSegments,
	importDynamicImportChunkname,
	importExportsLast,
	importNoDeprecated,
	importImportsFirst,
	jsdocCheckAccess,
	jsdocCheckAlignment,
	jsdocCheckExamples,
	jsdocCheckIndentation,
	jsdocCheckLineAlignment,
	jsdocCheckParamNames,
	jsdocCheckPropertyNames,
	jsdocCheckSyntax,
	jsdocCheckTagNames,
	jsdocCheckTypes,
	jsdocCheckValues,
	jsdocEmptyTags,
	jsdocImplementsOnClasses,
	jsdocMatchDescription,
	jsdocNewlineAfterDescription,
	jsdocNoBadBlocks,
	jsdocNoDefaults,
	jsdocNoTypes,
	jsdocNoUndefinedTypes,
	jsdocRequireDescription,
	jsdocRequireDescriptionCompleteSentence,
	jsdocRequireExample,
	jsdocRequireFileOverview,
	jsdocRequireHyphenBeforeParamDescription,
	jsdocRequireJsdoc,
	jsdocRequireParam,
	jsdocRequireParamDescription,
	jsdocRequireParamName,
	jsdocRequireParamType,
	jsdocRequireProperty,
	jsdocRequirePropertyDescription,
	jsdocRequirePropertyName,
	jsdocRequirePropertyType,
	jsdocRequireReturns,
	jsdocRequireReturnsCheck,
	jsdocRequireReturnsDescription,
	jsdocRequireReturnsType,
	jsdocRequireThrows,
	jsdocValidTypes,
	reactBooleanPropNaming,
	reactButtonHasType,
	reactDefaultPropsMatchPropTypes,
	reactDestructuringAssignment,
	reactDisplayName,
	reactForbidComponentProps,
	reactForbidDomProps,
	reactForbidElements,
	reactForbidForeignPropTypes,
	reactForbidPropTypes,
	reactFunctionComponentDefinition,
	reactJsxBooleanValue,
	reactJsxChildElementSpacing,
	reactJsxClosingBracketLocation,
	reactJsxClosingTagLocation,
	reactJsxCurlySpacing,
	reactJsxCurlyNewline,
	reactJsxEqualsSpacing,
	reactJsxFilenameExtension,
	reactJsxFirstPropNewLine,
	reactJsxHandlerNames,
	reactJsxIndent,
	reactJsxIndentProps,
	reactJsxKey,
	reactJsxMaxDepth,
	reactJsxMaxPropsPerLine,
	reactJsxNoBind,
	reactJsxNoCommentTextnodes,
	reactJsxNoDuplicateProps,
	reactJsxNoLiterals,
	reactJsxNoScriptUrl,
	reactJsxNoTargetBlank,
	reactJsxNoUselessFragment,
	reactJsxOneExpressionPerLine,
	reactJsxNoUndef,
	reactJsxCurlyBracePresence,
	reactJsxPascalCase,
	reactJsxFragments,
	reactJsxPropsNoMultiSpaces,
	reactJsxPropsNoSpreading,
	reactJsxSortDefaultProps,
	reactJsxSortProps,
	reactJsxSpaceBeforeClosing,
	reactJsxTagSpacing,
	reactJsxUsesReact,
	reactJsxUsesVars,
	reactJsxWrapMultilines,
	reactNoAccessStateInSetstate,
	reactNoAdjacentInlineElements,
	reactNoArrayIndexKey,
	reactNoChildrenProp,
	reactNoDanger,
	reactNoDangerWithChildren,
	reactNoDeprecated,
	reactNoDidMountSetState,
	reactNoDidUpdateSetState,
	reactNoDirectMutationState,
	reactNoFindDomNode,
	reactNoIsMounted,
	reactNoMultiComp,
	reactNoSetState,
	reactNoStringRefs,
	reactNoRedundantShouldComponentUpdate,
	reactNoRenderReturnValue,
	reactNoThisInSfc,
	reactNoTypos,
	reactNoUnescapedEntities,
	reactNoUnknownProperty,
	reactNoUnsafe,
	reactNoUnusedPropTypes,
	reactNoUnusedState,
	reactNoWillUpdateSetState,
	reactPreferEs6Class,
	reactPreferReadOnlyProps,
	reactPreferStatelessFunction,
	reactPropTypes,
	reactReactInJsxScope,
	reactRequireDefaultProps,
	reactRequireOptimization,
	reactRequireRenderReturn,
	reactSelfClosingComp,
	reactSortComp,
	reactSortPropTypes,
	reactStateInConstructor,
	reactStaticPropertyPlacement,
	reactStylePropObject,
	reactVoidDomElementsNoChildren,
	reactHooksRulesOfHooks,
	reactHooksExhaustiveDeps,
	regexInvalid,
	regexRequired,
	typescriptCustomSortKeysInterface,
	typescriptCustomSortKeysStringEnum,
	unusedImportsNoUnusedImportsTs,
	unusedImportsNoUnusedImports,
	unusedImportsNoUnusedVarsTs,
	unusedImportsNoUnusedVars,
	unusedImportsPredicates
}