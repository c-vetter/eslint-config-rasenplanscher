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
