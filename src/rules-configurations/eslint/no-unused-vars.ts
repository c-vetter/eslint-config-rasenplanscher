import Configuration from './no-unused-vars.d'

const configuration:Configuration = {
	ruleId: `no-unused-vars`,
	providerId: `eslint`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		args: `after-used`,
		caughtErrors: `all`,
		ignoreRestSiblings: false,
		vars: `all`,
	} ],
}

export default configuration
