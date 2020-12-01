export const noUselessBackreference = {
	id: 'no-useless-backreference',
	key: 'no-useless-backreference',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow useless backreferences in regular expressions',
			category: 'Possible Errors',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-useless-backreference'
		},
		schema: [],
		messages: {
			nested: 'Backreference ‘{{ bref }}’ will be ignored. It references group ‘{{ group }}’ from within that group.',
			forward: 'Backreference ‘{{ bref }}’ will be ignored. It references group ‘{{ group }}’ which appears later in the pattern.',
			backward: 'Backreference ‘{{ bref }}’ will be ignored. It references group ‘{{ group }}’ which appears before in the same lookbehind.',
			disjunctive: 'Backreference ‘{{ bref }}’ will be ignored. It references group ‘{{ group }}’ which is in another alternative.',
			intoNegativeLookaround: 'Backreference ‘{{ bref }}’ will be ignored. It references group ‘{{ group }}’ which is in a negative lookaround.'
		}
	}
}