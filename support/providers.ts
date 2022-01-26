import { readJsonSync } from 'fs-extra'

import { root } from './paths'

export const eslint = {
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

export const plugins: EslintPlugin[] = (
	Object.keys(readJsonSync(root(`package.json`)).devDependencies)
	.filter((d) => d.includes(`eslint-plugin`))
	.map((id) => ({
		id,
		name: (
			/(?:(@[^\/]+)\/)?eslint-plugin(?:-(.+))?/
			.exec(id)! // previous filter ensures that this is non-null
			.slice(1)
			.filter((n)=>n)
			.join(`/`)
		),
	}))
	.map((p) => ({
		...p,
		namespace: p.name + `/`,
	}))
)

export const providers: EslintProvider[] = [ eslint, ...plugins ]

export function parse (ruleId:string) {
	const provider = plugins.find((p) => ruleId.startsWith(p.namespace))

	if (!provider) {
		return {
			id: ruleId,
			key: ruleId,
			provider: eslint,
		}
	}

	const key = ruleId.replace(provider.namespace, ``)

	return {
		id: ruleId,
		key,
		provider,
	}
}
