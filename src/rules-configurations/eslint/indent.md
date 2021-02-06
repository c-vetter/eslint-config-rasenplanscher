indent
=====
The reason for going with tabs is that they are the more appropriate representation of intent. For a detailed explanation, see [Tabs versus Spaces](./indent.tabs-vs-spaces.md).

The rule of thumb
-----------------
The option settings follow a rather simple strategy: subordinate things are indented one level deeper than their respective “containers”, items at the same structural level are aligned. When in doubt, prefer indentation.

To see that in action, an example may be helpful. Let's use the following array assignment:
```js
const arrayOfAwesomeAncestors = [ Andrew, Agnes, Aramir, Agatha, Aesir ]
```
That one should be spread to multiple lines. There are three basic strategies for that.

+	**Single break**
	```js
	const arrayOfAwesomeAncestors = [
		Andrew, Agnes, Aramir, Agatha, Aesir
	]
	```
+	**Align with first**
	```js
	const arrayOfAwesomeAncestors = [ Andrew,
	                                  Agnes,
	                                  Aramir,
	                                  Agatha,
	                                  Aesir ]
	```
	```js
	const arrayOfAwesomeAncestors = [ Andrew,
	                                  Agnes,
	                                  Aramir,
	                                  Agatha,
	                                  Aesir,
	]
	```
+	**Align with name**
	```js
	const arrayOfAwesomeAncestors = [
	      Andrew,
	      Agnes,
	      Aramir,
	      Agatha,
	      Aesir,
	]
	```
+	**Indent**
	```js
	const arrayOfAwesomeAncestors = [
		Andrew,
		Agnes,
		Aramir,
		Agatha,
		Aesir,
	]
	```

For some shorter argument lists, `Single break` may work aesthetically, but it still has the issue of clotting together the items and the array name. And with any longer list, it's almost as bad as the one-liner. Therefore, it's off the table.

The `Align` and `Indent` strategies spread the items over multiple lines and thus help distinguishing the items.

The `Align with first` strategies create large distances between tokens and thus break cohesion. The first variant distances itself far from the next line, much further than is usually warranted by what happens in the code. The second variant breaks within itself and makes it hard to handle the whole expression as a single block.

Neither `Align with name` nor `Indent` suffer from those issues. Both have merit, and are each far superior to the other strategies. Of the two, `Align with name` is more visually coherent, while `Indent` is the more semantically correct since the items in an array are subordinate to the array itself. That makes `Indent` a close preference over `Align with name`. Additionally, `eslint` presently lacks support for `Align with name`, so the point is moot.

**Note:** This mostly eliminates alignment at the beginning of lines.

**Note:** The same logic applies to every expression with a named set of bracketed/braced/parenthesized token/values, such as function declarations and call expressions.


Options
-------
+	**SwitchCase**\
	The `case` statements are subordinate to their `switch` statements.
+	**VariableDeclarator**\
	The variables are structurally equal.
+	**outerIIFEBody**\
	An IIFE is a function, and should be treated accordingly. The times of huge pseudo modules are over, so the pattern of not indenting the function body on account of its size and logical module-root level can be considered obsolete.
+	**MemberExpression**\
	The result of a member expression is at the same level as its containing object. That may seem counter-intuitive, so compare these two examples:
	```js
	const key = value
	```
	```js
	const key = value.member
	```
	As can be seen in these examples, both `value` and `value.member` are assigned at the level of `key`. That makes them structurally equal. Many people will argument that `member` is subordinate to `value`, so that the member expression should be indented. Thought through, this would have to lead to this:
	```js
	const key = value
		.member
			.submember
	```
	The reasoning here should be obvious: if `.member` is subordinate to `value` and should therefore be indented, then by the same logic, `.submember` is subordinate to `.member` and should therefore be indented further.
	In any case, indenting member expressions leads to overindentation such that the next non-member line will cause a stumble when scanning through the code. That costs time and attention with no redeeming value.
+	**FunctionDeclaration**\
	See `The rule of thumb`
+	**FunctionExpression**\
	See `The rule of thumb`
+	**CallExpression**\
	See `The rule of thumb`
+	**ArrayExpression**\
	See `The rule of thumb`
+	**ObjectExpression**\
	See `The rule of thumb`
+	**ImportDeclaration**\
	See `The rule of thumb`
+	**flatTernaryExpressions, offsetTernaryExpressions, ignoredNodes**\
	The same reasoning applies here as for member expressions. Unfortunately, the rule cannot presently be configured such that ternaries can be handled according to the rules put forth here.
+	**ignoreComments**\
	Comments should be properly indented just like everything else.
