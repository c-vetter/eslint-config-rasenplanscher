import Configuration from './no-redeclare.d'

export const optionsObject = {
	builtinGlobals: true,
}

const configuration:Configuration = {
	ruleId: `no-redeclare`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [ optionsObject ],
}

export default configuration
