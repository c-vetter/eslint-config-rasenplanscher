import Configuration from './semi.d'

const configuration:Configuration = {
	ruleId: 'semi',
	providerId: 'eslint',
	priority: 'IMPORTANT',
	activate: true,
	options: [
		'never',
		{
			beforeStatementContinuationChars: 'never',
		},
	],
}

export default configuration
