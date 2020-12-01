export const noBufferConstructor = {
	id: 'no-buffer-constructor',
	key: 'no-buffer-constructor',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		deprecated: true,
		replacedBy: [],
		type: 'problem',
		docs: {
			description: 'disallow use of the `Buffer()` constructor',
			category: 'Node.js and CommonJS',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-buffer-constructor'
		},
		schema: [],
		messages: {
			deprecated: '{{expr}} is deprecated. Use Buffer.from(), Buffer.alloc(), or Buffer.allocUnsafe() instead.'
		}
	}
}