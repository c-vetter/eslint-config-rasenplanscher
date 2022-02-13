import { nodeResolve } from '@rollup/plugin-node-resolve'
import { readJsonSync } from 'fs-extra'

import { root, transpiled } from './paths'

const rc = (suffix:string) => `eslintrc${suffix ? `.${suffix}` : ``}.js`

const eslintrc = (suffix = ``) => ({
	input: transpiled(rc(suffix)),
	output: {
		file: root(rc(suffix)),
		format: `cjs`,
		exports: `default`,
		preferConst: true,
	},
	external: [
		suffix === `make` ? null : transpiled(rc(`make`)),
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
		...Object.keys(readJsonSync(root(`package.json`)).peerDependencies),
	],
	plugins: [
		nodeResolve(),
	],
})

export default [
	eslintrc(),
	eslintrc(`important`),
	eslintrc(`all`),
	eslintrc(`all.dangerzone`),
	eslintrc(`make`),
]
