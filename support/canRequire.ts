export function canRequire (id:string) {
	try {
		require.resolve(id)
	} catch (error) {
		type E = NodeJS.ErrnoException
		if ((error as E).code === `MODULE_NOT_FOUND`) return false

		throw error
	}

	return true
}
