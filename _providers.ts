import { readJsonSync } from 'fs-extra'

import { root } from './_paths'

const eslint = {
	id: 'eslint',
} as const

export type Eslint = typeof eslint
export type EslintPlugin = {id: string, namespace: string}
export type EslintProvider = Eslint | EslintPlugin

export const plugins: EslintPlugin[] =
Object.keys(readJsonSync(root('package.json')).devDependencies)
.filter(d => d.includes('eslint-plugin'))
.map(id => ({
	id,
	namespace: (
		/(?:(@[^\/]+)\/)?eslint-plugin(?:-(.+))?/
		.exec(id)! // previous filter ensures that this is non-null
		.slice(1)
		.filter(n=>n)
		.join('/')
	),
}))

export const providers: EslintProvider[] = [ eslint, ...plugins ]
