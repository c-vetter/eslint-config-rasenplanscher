import { nodeResolve } from '@rollup/plugin-node-resolve'
import { readJsonSync } from 'fs-extra'

import { root, transpiled } from './paths'

const eslintrc = (suffix='') => ({
	input: transpiled(`eslintrc${suffix}.js`),
	output: {
		file: root(`eslintrc${suffix}.js`),
		format: 'cjs',
		exports: 'default',
		preferConst: true,
	},
	external: [
		transpiled(`eslintrc.make.js`),
		...Object.keys(readJsonSync(root('package.json')).peerDependencies)
	],
	plugins: [
		nodeResolve(),
	],
})

export default [
	eslintrc(),
	eslintrc('.important'),
	eslintrc('.all'),
	eslintrc('.all.dangerzone'),
	eslintrc('.make'),
]
