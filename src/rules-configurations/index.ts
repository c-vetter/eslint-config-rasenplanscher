import __typescriptEslint__ from './@typescript-eslint'
import __eslint__ from './eslint'
import __import__ from './import'
import __node__ from './node'
import __simpleImportSort__ from './simple-import-sort'
import __unusedImports__ from './unused-imports'

export default [
	...__typescriptEslint__,
	...__eslint__,
	...__import__,
	...__node__,
	...__simpleImportSort__,
	...__unusedImports__,
]
