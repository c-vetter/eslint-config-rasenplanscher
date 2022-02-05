import Configuration from './computed-property-spacing.d'

const configuration:Configuration = {
	ruleId: `computed-property-spacing`,
	providerId: `eslint`,
	priority: `TASTE`,
	activate: true,
	options: [ {
		enforceForClassMembers: true
	} ],
}

export default configuration
