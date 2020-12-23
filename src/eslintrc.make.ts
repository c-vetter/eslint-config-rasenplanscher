import rulesConfigurations from './rules-configurations'

export default function makeEslintrc (...priorities:Symbol[]) {
	return {
		rules: (
			rulesConfigurations
			.filter(c => c.rule.provider.available)
			.filter(c => priorities.includes(c.priority))
			.reduce(
				(r, c) => ({
					...r,
					[c.rule.id]: [
						c.activate ? 'error' : 'off',
						...c.options
					]
				}),
				{},
			)
		),
	}
}
