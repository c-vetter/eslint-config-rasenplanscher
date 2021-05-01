import Configuration from './no-mixed-spaces-and-tabs.d'

const configuration:Configuration = {
	id: 'no-mixed-spaces-and-tabs',
	ruleId: 'no-mixed-spaces-and-tabs',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: [ 'smart-tabs' ],
}

export default configuration
