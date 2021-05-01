import Configuration from './semi.d'

const configuration:Configuration = {
	id: 'semi',
	ruleId: 'semi',
	providerId: 'eslint',
	priority: 'HELPFUL',
	activate: true,
	options: [
		'never',
		{
			beforeStatementContinuationChars: 'never',
		},
	],
}

export default configuration
