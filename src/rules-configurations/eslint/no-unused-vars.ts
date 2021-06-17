import Configuration from './no-unused-vars.d'

export const priority = `IMPORTANT`

const configuration:Configuration = {
	ruleId: `no-unused-vars`,
	providerId: `eslint`,
	priority,
	activate: true,
	options: [ {
		args: `after-used`,
		caughtErrors: `all`,
		ignoreRestSiblings: false,
		vars: `all`,
	} ],
}

export default configuration
