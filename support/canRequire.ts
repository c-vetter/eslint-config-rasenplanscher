export function canRequire (id:string) {
	try {
		require.resolve(id)
	} catch (error) {
		if (typeof error === 'string') throw new Error(error)
		if (error.message.includes('Cannot find module')) return false
		throw error
	}

	return true
}
