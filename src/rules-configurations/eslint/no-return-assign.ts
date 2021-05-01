import Configuration from './no-return-assign.d'

const configuration:Configuration = {
	id: 'no-return-assign',
	ruleId: 'no-return-assign',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: [ 'always' ],
}

export default configuration
