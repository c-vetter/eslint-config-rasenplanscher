import Configuration from './indent.d'

const configuration:Configuration = {
	ruleId: 'indent',
	providerId: 'eslint',
	priority: 'TASTE',
	activate: true,
	options: [
		'tab',
		{
			SwitchCase: 1,
			VariableDeclarator: 0,
			outerIIFEBody: 1,
			MemberExpression: 0,
			FunctionDeclaration: {
				parameters: 1,
				body: 1,
			},
			FunctionExpression: {
				parameters: 1,
				body: 1,
			},
			CallExpression: {
				arguments: 1,
			},
			ArrayExpression: 1,
			ObjectExpression: 1,
			ImportDeclaration: 1,
			flatTernaryExpressions: undefined,
			offsetTernaryExpressions: undefined,
			ignoredNodes: [
				'ConditionalExpression',
				'TemplateLiteral > *', // https://stackoverflow.com/a/53094449
			],
			ignoreComments: false,
		},
	],
}

export default configuration
