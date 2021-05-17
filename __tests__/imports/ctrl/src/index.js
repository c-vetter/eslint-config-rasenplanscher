import ava from 'ava'
import config from 'eslint-config-rasenplanscher'
import eslint from 'eslint'
import outdent from 'outdent'

export default {
	ava,
	config,
	eslint,
	outdent,
}

import('ava')
.then(ava => ava)
.catch(reason => reason)
