import ava from 'ava'
import eslint from 'eslint'
import config from 'eslint-config-rasenplanscher'
import outdent from 'outdent'

export default {
	ava,
	config,
	eslint,
	outdent,
}

import(`ava`)
.then((ava) => ava)
.catch((reason) => reason)
