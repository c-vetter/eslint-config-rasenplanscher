export const noPrototypeBuiltins = {
	id: 'no-prototype-builtins',
	key: 'no-prototype-builtins',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow calling some `Object.prototype` methods directly on objects',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-prototype-builtins'
		},
		schema: [],
		messages: {
			prototypeBuildIn: 'Do not access Object.prototype method ‘{{prop}}’ from target object.'
		}
	}
}