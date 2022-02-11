import { generateTypes } from './edit-config.processing'
import { rules, ruleToBundle } from './rules'

rules()
.filter((rule) => rule.exists)
.forEach((rule) => generateTypes(rule, ruleToBundle(rule)))
