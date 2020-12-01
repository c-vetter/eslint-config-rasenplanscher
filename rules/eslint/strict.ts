export const strict = {
	id: 'strict',
	key: 'strict',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require or disallow strict mode directives',
			category: 'Strict Mode',
			recommended: false,
			url: 'https://eslint.org/docs/rules/strict'
		},
		schema: [
			{
				enum: [
					'never',
					'global',
					'function',
					'safe'
				]
			}
		],
		fixable: 'code',
		messages: {
			function: 'Use the function form of ‘use strict’.',
			global: 'Use the global form of ‘use strict’.',
			multiple: 'Multiple ‘use strict’ directives.',
			never: 'Strict mode is not permitted.',
			unnecessary: 'Unnecessary ‘use strict’ directive.',
			module: '‘use strict’ is unnecessary inside of modules.',
			implied: '‘use strict’ is unnecessary when implied strict mode is enabled.',
			unnecessaryInClasses: '‘use strict’ is unnecessary inside of classes.',
			nonSimpleParameterList: '‘use strict’ directive inside a function with non-simple parameter list throws a syntax error since ES2016.',
			wrap: 'Wrap {{name}} in a function with ‘use strict’ directive.'
		}
	}
}