eslint-config-rasenplanscher
============================

This package provides a reasoned reactive shareable ESLint configuration in several variations.

What does that mean?
--------------------

### “reasoned”
The settings in this configuration are not generally built on gut feelings but on reasoning regarding how code formatting can improve productivity. All of that is documented in the project itself, so if you want to know **why** a rule is configured as it is, look at the markdown files you can find in the Github repository.

If you disagree with something rationally, please [open an issue](https://github.com/rasenplanscher/eslint-config-rasenplanscher/issues) to help me correct my thinking. If you disagree based on a gut feeling, please keep it to yourself until you either understand the truth found here or you can make a rational argument.

Also, if you'd like a setting that's missing here, just open a PR and it shall be included if the reasoning is up to snuff.

#### Note
Due to time constraints, this goal has been de-prioritized.
If you are unclear why a certain rule is configured the way it is, please [open an issue](https://github.com/rasenplanscher/eslint-config-rasenplanscher/issues).
PRs are also welcome, of course.

### “reactive”
This configuration determines whether your project uses the eslint plugins it has rules for and only activates those rules for the available plugins. That way, you can set up your project and just add the plugins you're interested in. The configuration will handle the rest.

And yes, on first publish, there's only a few rules. Live with it or get active!

### “shareable”
That's eslint-speak for an npm package that you can add to your project's dev dependencies and include in your estlintrc's `extends` configuration.

### variations
I hope that this will be interesting to others than myself. Therefore, I want to enable others to use this to the degree they are comfortable with. What that means is that you can use all the rules in here, just the most important ones, or something in between that will cover a lot but leave you in peace with what goes into the area of nit-picking.

What's in it, how to use it
---------------------------
First, install it (as well as the plugins you want):
```sh
npm install --save-dev eslint-config-rasenplanscher eslint@^8.7.0 @typescript-eslint/eslint-plugin@^5.10.0 @typescript-eslint/parser@^5.10.0 eslint-plugin-import@^2.25.4 eslint-plugin-unused-imports@^2.0.0
```

Then either add this to your `package.json`:
```json
	"eslintConfig": {
		"root": true,
		"extends": "rasenplanscher",
		"parserOptions": {
			"ecmaVersion": 2021,
			"sourceType": "module"
		}
	},
```
…or create a file named `.eslintrc.json` with following contents in the root folder of your project:
```json
{
	"root": true,
	"extends": "rasenplanscher",
	"parserOptions": {
		"ecmaVersion": 2021,
		"sourceType": "module"
	}
}
```

When using `@typescript-eslint/eslint-plugin` (you should 😉),
you need to also add `@typescript-eslint/parser` to your dependencies and set the appropriate typescript configuration:
```json
{
	"root": true,
	"extends": "rasenplanscher",
	"parserOptions": {
		"ecmaVersion": 2021,
		"project": "./tsconfig.json",
		"sourceType": "module"
	}
}
```
If your project is a multi-package monorepo, see [`@typescript-eslint`'s docs on configuring a monorepo](https://typescript-eslint.io/docs/linting/monorepo).

If you want to relax or strengthen your setup, you can choose from these setups (from smallest to largest):
+	`rasenplanscher/eslintrc.important`:
	The really important rules that will actually prevent errors – Never go without these!
+	`rasenplanscher`:
	Adds more rules that will help avoid confusion. Most projects will profit from these.
+	`rasenplanscher/eslintrc.all`:
	Adds more rules. These will help legibility, and therefore maintainability. Since these will be regarded as just “personal preference” by some people, they are opt-in.
+	`rasenplanscher/eslintrc.all.dangerzone`:
	Modifies a few rules to enable some advanced patterns that really should be used only by those who really know what they do. If you want to use this, first familiarize yourself with the Pro Tips of `dangerzone`-enabled rules. If you don't know how, this is not for you yet.

> **⚠ dangerzone**

If you want more control over what's going on, especially if you want to go into the danger zone step by step (which is definitely recommended), your best friend is `eslintrc.make.js` which exposes the API that the ready-made extendable files use themselves:
```js
// eslintrc.js in your project
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
```


----


# Changelog

## [2.0.0]
+ Breaking Change: deactivate overridden rules instead of ignoring
+ Breaking Change: emit warnings instead of errors for `TASTE` level rules
+ add support for `eslint-plugin-vue`
+ add support for `eslint-plugin-simple-import-sort`
+ 70 new rule configurations
	+ [getter-return](./src/rules-configurations/eslint/getter-return.md)
	+ [no-async-promise-executor](./src/rules-configurations/eslint/no-async-promise-executor.md)
	+ [no-compare-neg-zero](./src/rules-configurations/eslint/no-compare-neg-zero.md)
	+ [no-import-assign](./src/rules-configurations/eslint/no-import-assign.md)
	+ [no-loss-of-precision](./src/rules-configurations/eslint/no-loss-of-precision.md)
	+ [no-magic-numbers](./src/rules-configurations/eslint/no-magic-numbers.md)
	+ [no-misleading-character-class](./src/rules-configurations/eslint/no-misleading-character-class.md)
	+ [no-prototype-builtins](./src/rules-configurations/eslint/no-prototype-builtins.md)
	+ [no-restricted-imports](./src/rules-configurations/eslint/no-restricted-imports.md)
	+ [no-setter-return](./src/rules-configurations/eslint/no-setter-return.md)
	+ [no-unused-expressions](./src/rules-configurations/eslint/no-unused-expressions.md)
	+ [no-use-before-define](./src/rules-configurations/eslint/no-use-before-define.md)
	+ [prefer-const](./src/rules-configurations/eslint/prefer-const.md)
	+ [prefer-destructuring](./src/rules-configurations/eslint/prefer-destructuring.md)
	+ [prefer-regex-literals](./src/rules-configurations/eslint/prefer-regex-literals.md)
	+ [prefer-template](./src/rules-configurations/eslint/prefer-template.md)
	+ [radix](./src/rules-configurations/eslint/radix.md)
	+ [require-atomic-updates](./src/rules-configurations/eslint/require-atomic-updates.md)
	+ [require-await](./src/rules-configurations/eslint/require-await.md)
	+ [require-unicode-regexp](./src/rules-configurations/eslint/require-unicode-regexp.md)
	+ [require-yield](./src/rules-configurations/eslint/require-yield.md)
	+ [sort-imports](./src/rules-configurations/eslint/sort-imports.md)
	+ [@typescript-eslint/brace-style](./src/rules-configurations/@typescript-eslint/brace-style.md)
	+ [@typescript-eslint/comma-dangle](./src/rules-configurations/@typescript-eslint/comma-dangle.md)
	+ [@typescript-eslint/comma-spacing](./src/rules-configurations/@typescript-eslint/comma-spacing.md)
	+ [@typescript-eslint/default-param-last](./src/rules-configurations/@typescript-eslint/default-param-last.md)
	+ [@typescript-eslint/dot-notation](./src/rules-configurations/@typescript-eslint/dot-notation.md)
	+ [@typescript-eslint/func-call-spacing](./src/rules-configurations/@typescript-eslint/func-call-spacing.md)
	+ [@typescript-eslint/init-declarations](./src/rules-configurations/@typescript-eslint/init-declarations.md)
	+ [@typescript-eslint/keyword-spacing](./src/rules-configurations/@typescript-eslint/keyword-spacing.md)
	+ [@typescript-eslint/no-array-constructor](./src/rules-configurations/@typescript-eslint/no-array-constructor.md)
	+ [@typescript-eslint/no-dupe-class-members](./src/rules-configurations/@typescript-eslint/no-dupe-class-members.md)
	+ [@typescript-eslint/no-duplicate-imports](./src/rules-configurations/@typescript-eslint/no-duplicate-imports.md)
	+ [@typescript-eslint/no-empty-function](./src/rules-configurations/@typescript-eslint/no-empty-function.md)
	+ [@typescript-eslint/no-extra-parens](./src/rules-configurations/@typescript-eslint/no-extra-parens.md)
	+ [@typescript-eslint/no-extra-semi](./src/rules-configurations/@typescript-eslint/no-extra-semi.md)
	+ [@typescript-eslint/no-implied-eval](./src/rules-configurations/@typescript-eslint/no-implied-eval.md)
	+ [@typescript-eslint/no-invalid-this](./src/rules-configurations/@typescript-eslint/no-invalid-this.md)
	+ [@typescript-eslint/no-loss-of-precision](./src/rules-configurations/@typescript-eslint/no-loss-of-precision.md)
	+ [@typescript-eslint/no-magic-numbers](./src/rules-configurations/@typescript-eslint/no-magic-numbers.md)
	+ [@typescript-eslint/no-redeclare](./src/rules-configurations/@typescript-eslint/no-redeclare.md)
	+ [@typescript-eslint/no-restricted-imports](./src/rules-configurations/@typescript-eslint/no-restricted-imports.md)
	+ [@typescript-eslint/no-shadow](./src/rules-configurations/@typescript-eslint/no-shadow.md)
	+ [@typescript-eslint/no-throw-literal](./src/rules-configurations/@typescript-eslint/no-throw-literal.md)
	+ [@typescript-eslint/no-unused-expressions](./src/rules-configurations/@typescript-eslint/no-unused-expressions.md)
	+ [@typescript-eslint/no-unused-vars](./src/rules-configurations/@typescript-eslint/no-unused-vars.md)
	+ [@typescript-eslint/no-use-before-define](./src/rules-configurations/@typescript-eslint/no-use-before-define.md)
	+ [@typescript-eslint/no-useless-constructor](./src/rules-configurations/@typescript-eslint/no-useless-constructor.md)
	+ [@typescript-eslint/object-curly-spacing](./src/rules-configurations/@typescript-eslint/object-curly-spacing.md)
	+ [@typescript-eslint/padding-line-between-statements](./src/rules-configurations/@typescript-eslint/padding-line-between-statements.md)
	+ [@typescript-eslint/quotes](./src/rules-configurations/@typescript-eslint/quotes.md)
	+ [@typescript-eslint/require-await](./src/rules-configurations/@typescript-eslint/require-await.md)
	+ [@typescript-eslint/space-before-function-paren](./src/rules-configurations/@typescript-eslint/space-before-function-paren.md)
	+ [@typescript-eslint/space-infix-ops](./src/rules-configurations/@typescript-eslint/space-infix-ops.md)
	+ [import/default](./src/rules-configurations/import/default.md)
	+ [import/export](./src/rules-configurations/import/export.md)
	+ [import/extensions](./src/rules-configurations/import/extensions.md)
	+ [import/named](./src/rules-configurations/import/named.md)
	+ [import/namespace](./src/rules-configurations/import/namespace.md)
	+ [import/no-absolute-path](./src/rules-configurations/import/no-absolute-path.md)
	+ [import/no-duplicates](./src/rules-configurations/import/no-duplicates.md)
	+ [import/no-named-as-default-member](./src/rules-configurations/import/no-named-as-default-member.md)
	+ [import/no-named-as-default](./src/rules-configurations/import/no-named-as-default.md)
	+ [import/no-unresolved](./src/rules-configurations/import/no-unresolved.md)
	+ [import/order](./src/rules-configurations/import/order.md)
	+ [import/unambiguous](./src/rules-configurations/import/unambiguous.md)
	+ [node/no-restricted-import](./src/rules-configurations/node/no-restricted-import.md)
	+ [node/no-restricted-require](./src/rules-configurations/node/no-restricted-require.md)
	+ [simple-import-sort/exports](./src/rules-configurations/simple-import-sort/exports.md)
	+ [simple-import-sort/imports](./src/rules-configurations/simple-import-sort/imports.md)


## [1.3.0]
+	add note to README about de-prioritization of detailed rules documentation
+	add call to action for un-documented rule configurations
+	147 new rule configurations
	+ [accessor-pairs](./src/rules-configurations/eslint/accessor-pairs.md)
	+ [array-bracket-newline](./src/rules-configurations/eslint/array-bracket-newline.md)
	+ [array-bracket-spacing](./src/rules-configurations/eslint/array-bracket-spacing.md)
	+ [arrow-parens](./src/rules-configurations/eslint/arrow-parens.md)
	+ [block-scoped-var](./src/rules-configurations/eslint/block-scoped-var.md)
	+ [block-spacing](./src/rules-configurations/eslint/block-spacing.md)
	+ [computed-property-spacing](./src/rules-configurations/eslint/computed-property-spacing.md)
	+ [constructor-super](./src/rules-configurations/eslint/constructor-super.md)
	+ [default-case-last](./src/rules-configurations/eslint/default-case-last.md)
	+ [default-case](./src/rules-configurations/eslint/default-case.md)
	+ [default-param-last](./src/rules-configurations/eslint/default-param-last.md) +
	  [@typescript-eslint/default-param-last](./src/rules-configurations/@typescript-eslint/default-param-last.md)
	+ [dot-location](./src/rules-configurations/eslint/dot-location.md)
	+ [dot-notation](./src/rules-configurations/eslint/dot-notation.md) +
	  [@typescript-eslint/dot-notation](./src/rules-configurations/@typescript-eslint/dot-notation.md)
	+ [eol-last](./src/rules-configurations/eslint/eol-last.md)
	+ [for-direction](./src/rules-configurations/eslint/for-direction.md)
	+ [id-denylist](./src/rules-configurations/eslint/id-denylist.md)
	+ [id-length](./src/rules-configurations/eslint/id-length.md)
	+ [implicit-arrow-linebreak](./src/rules-configurations/eslint/implicit-arrow-linebreak.md)
	+ [indent](./src/rules-configurations/eslint/indent.md)
	+ [init-declarations](./src/rules-configurations/eslint/init-declarations.md) +
	  [@typescript-eslint/init-declarations](./src/rules-configurations/@typescript-eslint/init-declarations.md)
	+ [key-spacing](./src/rules-configurations/eslint/key-spacing.md)
	+ [linebreak-style](./src/rules-configurations/eslint/linebreak-style.md)
	+ [new-parens](./src/rules-configurations/eslint/new-parens.md)
	+ [no-alert](./src/rules-configurations/eslint/no-alert.md)
	+ [no-array-constructor](./src/rules-configurations/eslint/no-array-constructor.md) +
	  [@typescript-eslint/no-array-constructor](./src/rules-configurations/@typescript-eslint/no-array-constructor.md)
	+ [no-caller](./src/rules-configurations/eslint/no-caller.md)
	+ [no-class-assign](./src/rules-configurations/eslint/no-class-assign.md)
	+ [no-cond-assign](./src/rules-configurations/eslint/no-cond-assign.md)
	+ [no-confusing-arrow](./src/rules-configurations/eslint/no-confusing-arrow.md)
	+ [no-console](./src/rules-configurations/eslint/no-console.md)
	+ [no-const-assign](./src/rules-configurations/eslint/no-const-assign.md)
	+ [no-control-regex](./src/rules-configurations/eslint/no-control-regex.md)
	+ [no-debugger](./src/rules-configurations/eslint/no-debugger.md)
	+ [no-delete-var](./src/rules-configurations/eslint/no-delete-var.md)
	+ [no-div-regex](./src/rules-configurations/eslint/no-div-regex.md)
	+ [no-dupe-args](./src/rules-configurations/eslint/no-dupe-args.md)
	+ [no-dupe-class-members](./src/rules-configurations/eslint/no-dupe-class-members.md) +
	  [@typescript-eslint/no-dupe-class-members](./src/rules-configurations/@typescript-eslint/no-dupe-class-members.md)
	+ [no-dupe-else-if](./src/rules-configurations/eslint/no-dupe-else-if.md)
	+ [no-dupe-keys](./src/rules-configurations/eslint/no-dupe-keys.md)
	+ [no-duplicate-imports](./src/rules-configurations/eslint/no-duplicate-imports.md) +
	  [@typescript-eslint/no-duplicate-imports](./src/rules-configurations/@typescript-eslint/no-duplicate-imports.md)
	+ [no-empty-character-class](./src/rules-configurations/eslint/no-empty-character-class.md)
	+ [no-empty-function](./src/rules-configurations/eslint/no-empty-function.md) +
	  [@typescript-eslint/no-empty-function](./src/rules-configurations/@typescript-eslint/no-empty-function.md)
	+ [no-empty-pattern](./src/rules-configurations/eslint/no-empty-pattern.md)
	+ [no-empty](./src/rules-configurations/eslint/no-empty.md)
	+ [no-eval](./src/rules-configurations/eslint/no-eval.md)
	+ [no-ex-assign](./src/rules-configurations/eslint/no-ex-assign.md)
	+ [no-extend-native](./src/rules-configurations/eslint/no-extend-native.md)
	+ [no-extra-bind](./src/rules-configurations/eslint/no-extra-bind.md)
	+ [no-extra-boolean-cast](./src/rules-configurations/eslint/no-extra-boolean-cast.md)
	+ [no-extra-label](./src/rules-configurations/eslint/no-extra-label.md)
	+ [no-extra-parens](./src/rules-configurations/eslint/no-extra-parens.md) +
	  [@typescript-eslint/no-extra-parens](./src/rules-configurations/@typescript-eslint/no-extra-parens.md)
	+ [no-extra-semi](./src/rules-configurations/eslint/no-extra-semi.md) +
	  [@typescript-eslint/no-extra-semi](./src/rules-configurations/@typescript-eslint/no-extra-semi.md)
	+ [no-fallthrough](./src/rules-configurations/eslint/no-fallthrough.md)
	+ [no-floating-decimal](./src/rules-configurations/eslint/no-floating-decimal.md)
	+ [no-global-assign](./src/rules-configurations/eslint/no-global-assign.md)
	+ [no-implied-eval](./src/rules-configurations/eslint/no-implied-eval.md) +
	  [@typescript-eslint/no-implied-eval](./src/rules-configurations/@typescript-eslint/no-implied-eval.md)
	+ [no-inner-declarations](./src/rules-configurations/eslint/no-inner-declarations.md)
	+ [no-invalid-regexp](./src/rules-configurations/eslint/no-invalid-regexp.md)
	+ [no-invalid-this](./src/rules-configurations/eslint/no-invalid-this.md) +
	  [@typescript-eslint/no-invalid-this](./src/rules-configurations/@typescript-eslint/no-invalid-this.md)
	+ [no-irregular-whitespace](./src/rules-configurations/eslint/no-irregular-whitespace.md)
	+ [no-iterator](./src/rules-configurations/eslint/no-iterator.md)
	+ [no-labels](./src/rules-configurations/eslint/no-labels.md)
	+ [no-lone-blocks](./src/rules-configurations/eslint/no-lone-blocks.md)
	+ [no-lonely-if](./src/rules-configurations/eslint/no-lonely-if.md)
	+ [no-multi-assign](./src/rules-configurations/eslint/no-multi-assign.md)
	+ [no-multi-spaces](./src/rules-configurations/eslint/no-multi-spaces.md)
	+ [no-multi-str](./src/rules-configurations/eslint/no-multi-str.md)
	+ [no-multiple-empty-lines](./src/rules-configurations/eslint/no-multiple-empty-lines.md)
	+ [no-new-func](./src/rules-configurations/eslint/no-new-func.md)
	+ [no-new-object](./src/rules-configurations/eslint/no-new-object.md)
	+ [no-new-symbol](./src/rules-configurations/eslint/no-new-symbol.md)
	+ [no-new-wrappers](./src/rules-configurations/eslint/no-new-wrappers.md)
	+ [no-new](./src/rules-configurations/eslint/no-new.md)
	+ [no-obj-calls](./src/rules-configurations/eslint/no-obj-calls.md)
	+ [no-octal-escape](./src/rules-configurations/eslint/no-octal-escape.md)
	+ [no-octal](./src/rules-configurations/eslint/no-octal.md)
	+ [no-proto](./src/rules-configurations/eslint/no-proto.md)
	+ [no-redeclare](./src/rules-configurations/eslint/no-redeclare.md) +
	  [@typescript-eslint/no-redeclare](./src/rules-configurations/@typescript-eslint/no-redeclare.md)
	+ [no-regex-spaces](./src/rules-configurations/eslint/no-regex-spaces.md)
	+ [no-self-assign](./src/rules-configurations/eslint/no-self-assign.md)
	+ [no-self-compare](./src/rules-configurations/eslint/no-self-compare.md)
	+ [no-sequences](./src/rules-configurations/eslint/no-sequences.md)
	+ [no-shadow-restricted-names](./src/rules-configurations/eslint/no-shadow-restricted-names.md)
	+ [no-shadow](./src/rules-configurations/eslint/no-shadow.md) +
	  [@typescript-eslint/no-shadow](./src/rules-configurations/@typescript-eslint/no-shadow.md)
	+ [no-sparse-arrays](./src/rules-configurations/eslint/no-sparse-arrays.md)
	+ [no-tabs](./src/rules-configurations/eslint/no-tabs.md)
	+ [no-template-curly-in-string](./src/rules-configurations/eslint/no-template-curly-in-string.md)
	+ [no-throw-literal](./src/rules-configurations/eslint/no-throw-literal.md) +
	  [@typescript-eslint/no-throw-literal](./src/rules-configurations/@typescript-eslint/no-throw-literal.md)
	+ [no-trailing-spaces](./src/rules-configurations/eslint/no-trailing-spaces.md)
	+ [no-undef-init](./src/rules-configurations/eslint/no-undef-init.md)
	+ [no-undef](./src/rules-configurations/eslint/no-undef.md)
	+ [no-undefined](./src/rules-configurations/eslint/no-undefined.md)
	+ [no-unmodified-loop-condition](./src/rules-configurations/eslint/no-unmodified-loop-condition.md)
	+ [no-unneeded-ternary](./src/rules-configurations/eslint/no-unneeded-ternary.md)
	+ [no-unreachable-loop](./src/rules-configurations/eslint/no-unreachable-loop.md)
	+ [no-unreachable](./src/rules-configurations/eslint/no-unreachable.md)
	+ [no-unsafe-finally](./src/rules-configurations/eslint/no-unsafe-finally.md)
	+ [no-unsafe-negation](./src/rules-configurations/eslint/no-unsafe-negation.md)
	+ [no-unsafe-optional-chaining](./src/rules-configurations/eslint/no-unsafe-optional-chaining.md)
	+ [no-unused-labels](./src/rules-configurations/eslint/no-unused-labels.md)
	+ [no-useless-backreference](./src/rules-configurations/eslint/no-useless-backreference.md)
	+ [no-useless-catch](./src/rules-configurations/eslint/no-useless-catch.md)
	+ [no-useless-computed-key](./src/rules-configurations/eslint/no-useless-computed-key.md)
	+ [no-useless-concat](./src/rules-configurations/eslint/no-useless-concat.md)
	+ [no-useless-constructor](./src/rules-configurations/eslint/no-useless-constructor.md) +
	  [@typescript-eslint/no-useless-constructor](./src/rules-configurations/@typescript-eslint/no-useless-constructor.md)
	+ [no-useless-escape](./src/rules-configurations/eslint/no-useless-escape.md)
	+ [no-useless-return](./src/rules-configurations/eslint/no-useless-return.md)
	+ [no-var](./src/rules-configurations/eslint/no-var.md)
	+ [no-void](./src/rules-configurations/eslint/no-void.md)
	+ [no-whitespace-before-property](./src/rules-configurations/eslint/no-whitespace-before-property.md)
	+ [no-with](./src/rules-configurations/eslint/no-with.md)
	+ [object-curly-spacing](./src/rules-configurations/eslint/object-curly-spacing.md) +
	  [@typescript-eslint/object-curly-spacing](./src/rules-configurations/@typescript-eslint/object-curly-spacing.md)
	+ [object-property-newline](./src/rules-configurations/eslint/object-property-newline.md)
	+ [operator-linebreak](./src/rules-configurations/eslint/operator-linebreak.md)
	+ [padded-blocks](./src/rules-configurations/eslint/padded-blocks.md)
	+ [padding-line-between-statements](./src/rules-configurations/eslint/padding-line-between-statements.md) +
	  [@typescript-eslint/padding-line-between-statements](./src/rules-configurations/@typescript-eslint/padding-line-between-statements.md)
	+ [rest-spread-spacing](./src/rules-configurations/eslint/rest-spread-spacing.md)
	+ [semi-spacing](./src/rules-configurations/eslint/semi-spacing.md)
	+ [space-before-blocks](./src/rules-configurations/eslint/space-before-blocks.md)
	+ [space-unary-ops](./src/rules-configurations/eslint/space-unary-ops.md)
	+ [spaced-comment](./src/rules-configurations/eslint/spaced-comment.md)
	+ [switch-colon-spacing](./src/rules-configurations/eslint/switch-colon-spacing.md)
	+ [template-curly-spacing](./src/rules-configurations/eslint/template-curly-spacing.md)
	+ [use-isnan](./src/rules-configurations/eslint/use-isnan.md)
	+ [valid-typeof](./src/rules-configurations/eslint/valid-typeof.md)
	+ [yield-star-spacing](./src/rules-configurations/eslint/yield-star-spacing.md)
	+
	+ [@typescript-eslint/lines-between-class-members](./src/rules-configurations/@typescript-eslint/lines-between-class-members.md)
	+
	+ [node/handle-callback-err](./src/rules-configurations/node/handle-callback-err.md)
	+ [node/no-new-require](./src/rules-configurations/node/no-new-require.md)
	+ [node/no-path-concat](./src/rules-configurations/node/no-path-concat.md)

## [1.2.0]
+	fix `peerDependencies`
+	add note to README about `parserOptions.project` for `@typescript-eslint/eslint-plugin`
+	8 new rule configurations
	+ [no-constant-condition](./src/rules-configurations/eslint/no-constant-condition.md)
	+
	+ [@typescript-eslint/no-unnecessary-boolean-literal-compare](./src/rules-configurations/@typescript-eslint/no-unnecessary-boolean-literal-compare.md)
	+ [@typescript-eslint/no-unnecessary-condition](./src/rules-configurations/@typescript-eslint/no-unnecessary-condition.md)
	+ [@typescript-eslint/no-unnecessary-qualifier](./src/rules-configurations/@typescript-eslint/no-unnecessary-qualifier.md)
	+ [@typescript-eslint/no-unnecessary-type-arguments](./src/rules-configurations/@typescript-eslint/no-unnecessary-type-arguments.md)
	+ [@typescript-eslint/no-unnecessary-type-assertion](./src/rules-configurations/@typescript-eslint/no-unnecessary-type-assertion.md)
	+ [@typescript-eslint/no-unnecessary-type-constraint](./src/rules-configurations/@typescript-eslint/no-unnecessary-type-constraint.md)
	+ [@typescript-eslint/strict-boolean-expressions](./src/rules-configurations/@typescript-eslint/strict-boolean-expressions.md)

## [1.1.0]
+	30 new rule configurations
	+ [comma-dangle](./src/rules-configurations/eslint/comma-dangle.md) +
	  [@typescript-eslint/comma-dangle](./src/rules-configurations/@typescript-eslint/comma-dangle.md)
	+ [comma-spacing](./src/rules-configurations/eslint/comma-spacing.md) +
	  [@typescript-eslint/comma-spacing](./src/rules-configurations/@typescript-eslint/comma-spacing.md)
	+ [comma-style](./src/rules-configurations/eslint/comma-style.md)
	+ [eqeqeq](./src/rules-configurations/eslint/eqeqeq.md)
	+ [func-call-spacing](./src/rules-configurations/eslint/func-call-spacing.md) +
	  [@typescript-eslint/func-call-spacing](./src/rules-configurations/@typescript-eslint/func-call-spacing.md)
	+ [keyword-spacing](./src/rules-configurations/eslint/keyword-spacing.md) +
	  [@typescript-eslint/keyword-spacing](./src/rules-configurations/@typescript-eslint/keyword-spacing.md)
	+ [no-duplicate-case](./src/rules-configurations/eslint/no-duplicate-case.md)
	+ [no-unused-vars](./src/rules-configurations/eslint/no-unused-vars.md) +
	  [@typescript-eslint/no-unused-vars](./src/rules-configurations/@typescript-eslint/no-unused-vars.md)
	+ [one-var-declaration-per-line](./src/rules-configurations/eslint/one-var-declaration-per-line.md)
	+ [one-var](./src/rules-configurations/eslint/one-var.md)
	+ [quotes](./src/rules-configurations/eslint/quotes.md) +
	  [@typescript-eslint/quotes](./src/rules-configurations/@typescript-eslint/quotes.md)
	+ [space-before-function-paren](./src/rules-configurations/eslint/space-before-function-paren.md) +
	  [@typescript-eslint/space-before-function-paren](./src/rules-configurations/@typescript-eslint/space-before-function-paren.md)
	+ [space-infix-ops](./src/rules-configurations/eslint/space-infix-ops.md) +
	  [@typescript-eslint/space-infix-ops](./src/rules-configurations/@typescript-eslint/space-infix-ops.md)
	+ [wrap-iife](./src/rules-configurations/eslint/wrap-iife.md)
	+ [yoda](./src/rules-configurations/eslint/yoda.md)
	+
	+ [@typescript-eslint/consistent-type-definitions](./src/rules-configurations/@typescript-eslint/consistent-type-definitions.md)
	+ [@typescript-eslint/indent](./src/rules-configurations/@typescript-eslint/indent.md)
	+
	+ [import/no-extraneous-dependencies](./src/rules-configurations/import/no-extraneous-dependencies.md)
	+ [unused-imports/no-unused-imports-ts](./src/rules-configurations/unused-imports/no-unused-imports-ts.md)
	+ [unused-imports/no-unused-imports](./src/rules-configurations/unused-imports/no-unused-imports.md)
	+ [unused-imports/no-unused-vars-ts](./src/rules-configurations/unused-imports/no-unused-vars-ts.md)
	+ [unused-imports/no-unused-vars](./src/rules-configurations/unused-imports/no-unused-vars.md)

## [1.0.0]
+	Reactiveness
+	4 levels/variants: `default`, `important`, `all`, `all+dangerzone`
+	29 rule configurations
	+ [array-element-newline](./src/rules-configurations/eslint/array-element-newline.md)
	+ [brace-style](./src/rules-configurations/eslint/brace-style.md) +
	  [@typescript-eslint/brace-style](./src/rules-configurations/@typescript-eslint/brace-style.md)
	+ [camelcase](./src/rules-configurations/eslint/camelcase.md)
	+ [consistent-return](./src/rules-configurations/eslint/consistent-return.md)
	+ [curly](./src/rules-configurations/eslint/curly.md)
	+ [id-match](./src/rules-configurations/eslint/id-match.md)
	+ [indent](./src/rules-configurations/eslint/indent.md)
	+ [lines-between-class-members](./src/rules-configurations/eslint/lines-between-class-members.md)
	+ [new-cap](./src/rules-configurations/eslint/new-cap.md)
	+ [no-case-declarations](./src/rules-configurations/eslint/no-case-declarations.md)
	+ [no-func-assign](./src/rules-configurations/eslint/no-func-assign.md)
	+ [no-label-var](./src/rules-configurations/eslint/no-label-var.md)
	+ [no-mixed-spaces-and-tabs](./src/rules-configurations/eslint/no-mixed-spaces-and-tabs.md)
	+ [no-nonoctal-decimal-escape](./src/rules-configurations/eslint/no-nonoctal-decimal-escape.md)
	+ [no-restricted-properties](./src/rules-configurations/eslint/no-restricted-properties.md)
	+ [no-return-assign](./src/rules-configurations/eslint/no-return-assign.md)
	+ [no-this-before-super](./src/rules-configurations/eslint/no-this-before-super.md)
	+ [no-unexpected-multiline](./src/rules-configurations/eslint/no-unexpected-multiline.md)
	+ [no-useless-call](./src/rules-configurations/eslint/no-useless-call.md)
	+ [no-useless-rename](./src/rules-configurations/eslint/no-useless-rename.md)
	+ [prefer-arrow-callback](./src/rules-configurations/eslint/prefer-arrow-callback.md)
	+ [prefer-numeric-literals](./src/rules-configurations/eslint/prefer-numeric-literals.md)
	+ [prefer-rest-params](./src/rules-configurations/eslint/prefer-rest-params.md)
	+ [prefer-spread](./src/rules-configurations/eslint/prefer-spread.md)
	+ [semi-style](./src/rules-configurations/eslint/semi-style.md)
	+ [semi](./src/rules-configurations/eslint/semi.md)
	+ [sort-keys](./src/rules-configurations/eslint/sort-keys.md)
	+ [space-in-parens](./src/rules-configurations/eslint/space-in-parens.md)
