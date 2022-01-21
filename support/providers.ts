import { readJsonSync } from 'fs-extra'

import { root } from './paths'

const eslint = {
	id: `eslint`,
	name: `eslint`,
} as const

export type Eslint = typeof eslint
export type EslintPlugin = {
	id: string,
	name: string,
	namespace: string
}
export type EslintProvider = Eslint | EslintPlugin

export const plugins: EslintPlugin[] =
Object.keys(readJsonSync(root(`package.json`)).devDependencies)
.filter(d => d.includes(`eslint-plugin`))
.map(id => ({
	id,
	namespace: (
		/(?:(@[^\/]+)\/)?eslint-plugin(?:-(.+))?/
		.exec(id)! // previous filter ensures that this is non-null
		.slice(1)
		.filter(n=>n)
		.join(`/`)
	),
}))
.map(p => ({
	...p,
	name: p.namespace,
}))

export const providers: EslintProvider[] = [ eslint, ...plugins ]


export function providerFor (ruleId:string) {
	if (!ruleId.includes(`/`)) return eslint

	const namespace = ruleId.split(`/`)[0]
	const provider = plugins.find(p => p.namespace === namespace)

	if (!provider) throw new Error(`No provider found for rule ${ruleId}`)

	return provider
}
