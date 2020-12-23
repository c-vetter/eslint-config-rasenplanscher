import { nodeResolve } from '@rollup/plugin-node-resolve'
import { readJsonSync } from 'fs-extra'

const eslintrc = (postfix='') => ({
	input: `.transpiled/eslintrc${postfix}.js`,
	output: {
		file: `eslintrc${postfix}.js`,
		format: 'cjs',
		exports: 'default',
		preferConst: true,
	},
	external: Object.keys(readJsonSync('package.json').peerDependencies),
	plugins: [
		nodeResolve(),
	],
})

export default [
	eslintrc(),
	eslintrc('.important'),
	eslintrc('.all'),
]
