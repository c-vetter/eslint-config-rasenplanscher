import { outputFile } from 'fs-extra'

import { src } from './paths'
import { providers } from './providers'


const checkerName = 'canRequire'

const exportsList = providers.map(p => `'${p.id}': ${checkerName}('${p.id}'),`)

const availabilityChecker =
`function ${checkerName} (id:string) {
	try {
		require.resolve(id)
	} catch (error) {
		if (typeof error === 'string') throw new Error(error)
		if (error.message.includes('Cannot find module')) return false
		throw error
	}

	return true
}`

outputFile(src('.providers.ts'), `
export const providers = {
	${ exportsList.join('\n\t') }
} as const

${ availabilityChecker }
`.trim())
