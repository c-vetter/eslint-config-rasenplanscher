import { ruleToBundle, rules } from './rules'
import { generateTypes } from './edit-config.processing'

rules
.filter((rule) => rule.exists)
.forEach((item) => generateTypes(item, ruleToBundle(item)))
