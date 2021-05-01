import Configuration from './consistent-return.d'

const configuration:Configuration = {
	id: 'consistent-return',
	ruleId: 'consistent-return',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [{
		treatUndefinedAsUnspecified: false,
	}],
}

export default configuration
