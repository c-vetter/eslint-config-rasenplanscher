import Configuration from './curly.d'

const configuration:Configuration = {
	id: 'curly',
	ruleId: 'curly',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: [
		'all',
	],
	optionsDangerzone: [
		'multi-line',
		'consistent',
	],
}

export default configuration
