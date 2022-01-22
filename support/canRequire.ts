export function canRequire (id:string) {
	try {
		require.resolve(id)
	} catch (error) {
		if ((error as Error).message.includes(`Cannot find module`)) return false

		throw error
	}

	return true
}
