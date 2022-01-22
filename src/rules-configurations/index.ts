import _typescriptEslint_ from './@typescript-eslint'
import _eslint_ from './eslint'
import _import_ from './import'
import _unusedImports_ from './unused-imports'

export default [
	..._typescriptEslint_,
	..._eslint_,
	..._import_,
	..._unusedImports_,
]