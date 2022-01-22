import config from 'eslint-config-rasenplanscher'
import eslint from 'eslint'
import outdent from 'outdent'
import rimraf from 'rimraf'

export default {
	rimraf,
	config,
	eslint,
	outdent,
}

import('rimraf')
.then(rimraf => rimraf)
.catch(reason => reason)
