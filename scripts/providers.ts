import { camelCase } from 'case-anything'
import { outputFile } from 'fs-extra'

import { src } from '../_paths'
import { Eslint, EslintPlugin, EslintProvider, providers } from '../_providers'

const exportsList = providers
.map(p => `export const ${providerExportName(p)} = ${
	JSON.stringify(p, null, '\t')
	.replace(/"(\w+)":/g, '$1:')
	.replace(/\n}/, `,\n\tavailable: canRequire('${p.id}'),\n} as const`)
	.replace(/"/g, `'`)
}`)
.join('\n')

const availabilityChecker =
`function canRequire(id:string) {
	try {
		require.resolve(id)
	} catch (error) {
		if (typeof error === 'string') throw new Error(error)
		if (error.message.includes('Cannot find module')) return false
		throw error
	}

	return true
}`

export const providersFile = src('.providers.ts')
outputFile(providersFile, `
${ exportsList }
${ availabilityChecker }
`)

export function providerExportName(provider:EslintProvider) {
	return camelCase(`provider:${
		(provider as EslintPlugin).namespace
		||
		(provider as Eslint).id
	}`)
}
