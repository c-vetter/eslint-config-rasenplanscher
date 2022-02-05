import { ruleToBundle, rules } from './rules'
import { generateDoc } from './edit-config.processing'
import { pathExistsSync } from 'fs-extra'

rules()
.filter((rule) => rule.exists)
.filter((rule) => !pathExistsSync(rule.reasonFile))
.forEach((rule) => generateDoc(rule, ruleToBundle(rule)))
