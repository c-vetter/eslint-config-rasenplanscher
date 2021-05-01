import Configuration from './new-cap.d'

const configuration:Configuration = {
	id: 'new-cap',
	ruleId: 'new-cap',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [ {
		newIsCap: true,
		capIsNew: true,
		properties: true,
	} ],
}

export default configuration
