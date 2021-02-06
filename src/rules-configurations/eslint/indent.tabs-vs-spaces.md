Tabs versus Spaces
==============
Many things have been said on this topic, and regrettably, most often, there are some hidden assumptions that foul the resulting recommendations.

First principles: a glossary of terms
-------------------------------------
Let's start with a look at what we are talking about, in order to better be able to spot and take into account facts, preferences, and assumptions, hidden or not. To do that, a viable option is to setup a glossary.

The following will be as precise as feasible while keeping in mind that it is meant as a foundation for resolving the issue of using tabs versus spaces. For instance, word wrap will be ignored here for simplicity. Also, all terms will be used and discussed in the context of code editors, applicability beyond that will vary and is of no concern here. Where editors differ, this will go with the labelling found in VScode, just because it's the author's editor of choice.

+	**Character**\
	An item of type, usually some kind of symbol.
+	**White space (character)**\
	Characters that do not print but horizontally offset the following characters by some distance, called its width.
	+	`White space character` denominates a single such character.
	+	`White space` denominates an inderterminate amount of such characters.
+	**Space**\
	A `white space character` of a small variable, but consistent, width. The width usually depends on the chosen font, but may be changed by the editor.
+	**Tab**\
	A term that is variously used to mean one of three related but different things:
	+	**Tab character**\
		A `white space character` of variable width. The width is always the distance to the next `Tab stop`.
	+	**Tab stop**\
		A point in a line of text that is at a variable distance from the beginning of the line. The distance depends on the settings and capabilities of the editor in use. The distance of any single `Tab stop` can vary between editors, between machines, between users. `Tab stop`s are most often set at consistent intervals of multiples of a `space`.
	+	**Tab key**\
		A key on a keyboard (or typewriter) that used to “skip ahead” in some manner dependent on context and configuration.
	+	[There is some history to the concepts here.](./no-mixed-spaces-and-tabs.tab-history.md)
+	**Tab width / tab size**\
	The width of a `tab character`. Usually given as a multiple of `space`.
+	**Column**\
	A variable unit of horizontal distance. The distance depends on the settings and capabilities of the editor in use. It is usually equal to the current character. The editor may be setup to fix the width of a column, so that all columns are of equal width.
+	**Formatting**\
	Setting up pieces of text on different lines in such a way that related elements are at the same horizontal distance from the beginning of each line. This takes two main forms:
	+	**Indentation / Indent** 
		1.	White space at the beginning of a line of code used to visualize some logical structure, e.g. different levels of nested block scopes, parent/child-relationships.
		2.	The act of adding or setting such white space.
	+	**Alignment / Tabulation**\
		1.	White space beyond `indentation` used to arrange related pieces of data on multiple consecutive lines into vertical sections with shared horizontal boundaries.
		2.	The act of adding, or editing such white space.
+	**Cursor**\
	Insertion point for text, often visualized as a vertical line. Has a location at any character in any line of text.


### Code samples
In the code samples following later, Tab characters will be visualized by character sequences such as `--->`. The number of characters will be employed according to each sample's intended tab width.


Common misconceptions
---------------------
Merely reading through the glossary terms above, one can see some potential for misunderstandings. Let's look at some of the most important issues.

### Fonts
Often overlooked, the font used is one of the primary factors in how tabs and spaces work, and consequently have great impact on the validity of many assumptions and recommendations.

Fonts can be grouped according to several metrics. For this discussion, the main differentiator is whether the font is `proportional` or `monotype`:
+	Monospace fonts are made so that almost all characters have the exact same width.
+	Proportional fonts have character widths as most people expect them, with “M” being significantly wider than “i”.

In the early years of computer technology, available resources were far more constrained than today. Monospace fonts require substantially less computation to display. Consequently, monospace fonts were used everywhere, and many conventions and assumptions come from that time although the constraints have loosened or disappeared.

One such assumption is that in a code editor, a monospace font is used. That assumption is a fair assumption, for the most part.

What's important for this discussion is the fact that **modern code editors allow you to use proportional fonts**. That has important implications for many aspects of the debate.


### Columns, Characters, Spaces, Tab widths
When talking about cursor location as an offset from the beginning of the line, this columns are almost synonymous with characters, which are almost synonymous with spaces. That is one reason why those terms are frequently conflated in this context. When indentation is set to use tab characters, and `tabstop`s are set as multiples of space, the distinctions become relevant.

Given a tab width of 4 spaces, consider this code:
```js
1 if (condition) {
2 --->return result
3 }
```
The `return` keyword is indented one level, with one tab character, but the offset is 4 columns, which is the same width as 4 space characters.
