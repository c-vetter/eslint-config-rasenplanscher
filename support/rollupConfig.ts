import { nodeResolve } from '@rollup/plugin-node-resolve'
import { readJsonSync } from 'fs-extra'

import { root, transpiled } from './paths'

const eslintrc = (postfix='') => ({
	input: transpiled(`eslintrc${postfix}.js`),
	output: {
		file: root(`eslintrc${postfix}.js`),
		format: 'cjs',
		exports: 'default',
		preferConst: true,
	},
	external: Object.keys(readJsonSync(root('package.json')).peerDependencies),
	plugins: [
		nodeResolve(),
	],
})

export default [
	eslintrc(),
	eslintrc('.important'),
	eslintrc('.all'),
]
