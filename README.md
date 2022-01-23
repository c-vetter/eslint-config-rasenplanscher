eslint-config-rasenplanscher
============================

This package provides a reasoned reactive shareable ESLint configuration in several variations.

What does that mean?
--------------------

### “reasoned”
The settings in this configuration are not generally built on gut feelings but on reasoning regarding how code formatting can improve productivity. All of that is documented in the project itself, so if you want to know **why** a rule is configured as it is, look at the markdown files you can find in the Github repository.

If you disagree with something rationally, please open an issue to help me correct my thinking. If you disagree based on a gut feeling, please keep it to yourself until you either understand the truth found here or you can make a rational argument.

Also, if you'd like a setting that's missing here, just open a PR and it shall be included if the reasoning is up to snuff.

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

## [1.1.0]
+	30 new rules
	+ [comma-dangle](src/rules-configurations/eslint/comma-dangle.md) +
	  [@typescript-eslint/comma-dangle](src/rules-configurations/@typescript-eslint/comma-dangle.md)
	+ [comma-spacing](src/rules-configurations/eslint/comma-spacing.md) +
	  [@typescript-eslint/comma-spacing](src/rules-configurations/@typescript-eslint/comma-spacing.md)
	+ [comma-style](src/rules-configurations/eslint/comma-style.md)
	+ [eqeqeq](src/rules-configurations/eslint/eqeqeq.md)
	+ [func-call-spacing](src/rules-configurations/eslint/func-call-spacing.md) +
	  [@typescript-eslint/func-call-spacing](src/rules-configurations/@typescript-eslint/func-call-spacing.md)
	+ [keyword-spacing](src/rules-configurations/eslint/keyword-spacing.md) +
	  [@typescript-eslint/keyword-spacing](src/rules-configurations/@typescript-eslint/keyword-spacing.md)
	+ [no-duplicate-case](src/rules-configurations/eslint/no-duplicate-case.md)
	+ [no-unused-vars](src/rules-configurations/eslint/no-unused-vars.md) +
	  [@typescript-eslint/no-unused-vars](src/rules-configurations/@typescript-eslint/no-unused-vars.md)
	+ [one-var-declaration-per-line](src/rules-configurations/eslint/one-var-declaration-per-line.md)
	+ [one-var](src/rules-configurations/eslint/one-var.md)
	+ [quotes](src/rules-configurations/eslint/quotes.md) +
	  [@typescript-eslint/quotes](src/rules-configurations/@typescript-eslint/quotes.md)
	+ [space-before-function-paren](src/rules-configurations/eslint/space-before-function-paren.md) +
	  [@typescript-eslint/space-before-function-paren](src/rules-configurations/@typescript-eslint/space-before-function-paren.md)
	+ [space-infix-ops](src/rules-configurations/eslint/space-infix-ops.md)
	+ [@typescript-eslint/space-infix-ops](src/rules-configurations/@typescript-eslint/space-infix-ops.md)
	+ [wrap-iife](src/rules-configurations/eslint/wrap-iife.md)
	+ [yoda](src/rules-configurations/eslint/yoda.md)
	+ [@typescript-eslint/consistent-type-definitions](src/rules-configurations/@typescript-eslint/consistent-type-definitions.md)
	+ [@typescript-eslint/indent](src/rules-configurations/@typescript-eslint/indent.md)
	+ [import/no-extraneous-dependencies](src/rules-configurations/import/no-extraneous-dependencies.md)
	+ [unused-imports/no-unused-imports-ts](src/rules-configurations/unused-imports/no-unused-imports-ts.md)
	+ [unused-imports/no-unused-imports](src/rules-configurations/unused-imports/no-unused-imports.md)
	+ [unused-imports/no-unused-vars-ts](src/rules-configurations/unused-imports/no-unused-vars-ts.md)
	+ [unused-imports/no-unused-vars](src/rules-configurations/unused-imports/no-unused-vars.md)

## [1.0.0]
+	Reactiveness
+	4 levels/variants: `default`, `important`, `all`, `all+dangerzone`
+	29 rules:
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
