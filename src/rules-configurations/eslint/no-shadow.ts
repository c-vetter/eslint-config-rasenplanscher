import Configuration from './no-shadow.d'

export const optionsObject = {
	builtinGlobals: false,
	hoist: `all` as const,
	// TODO: make this configurable
	allow: [],
}

const configuration:Configuration = {
	ruleId: `no-shadow`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [ optionsObject ],
}

export default configuration
