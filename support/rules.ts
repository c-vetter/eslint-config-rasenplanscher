import { pathExistsSync } from 'fs-extra'
import allRules from './.rules-definitions'
import { rulesConfigurations, rulesDefinitions } from './paths'
import { eslint, providers } from './providers'
import { RuleData, RuleDefinition } from './Rule'

export const rules = allRules.map(ruleData)

function ruleData (rule:RuleDefinition) : RuleData {
	const provider = providers.find(({ id }) => id === rule.providerId)
	if (!provider) throw new Error(`No provider found for rule ${rule.id}`)

	const configFile = rulesConfigurations(provider.name, `${rule.key}.ts`)
	const typingFile = rulesConfigurations(provider.name, `${rule.key}.d.ts`)
	const reasonFile = rulesConfigurations(provider.name, `${rule.key}.md`)
	const definitionFile = rulesDefinitions(provider.name, `${rule.key}.ts`)

	const existence = [
		pathExistsSync(configFile),
		pathExistsSync(typingFile),
		pathExistsSync(reasonFile),
	]

	return {
		rule,
		provider,
		configFile,
		typingFile,
		reasonFile,
		definitionFile,
		exists: existence.some(exists=>exists),
		complete: existence.every(exists=>exists),
	}
}

export function ruleToBundle (data:RuleData) {
	const all = rules.filter((x) => {
		if (x.rule.key === data.rule.key) return true

		if (typeof data.rule.meta.docs?.extendsBaseRule === `string`) {
			if (x.rule.id === data.rule.meta.docs.extendsBaseRule) return true
		}

		if (typeof x.rule.meta.docs?.extendsBaseRule === `string`) {
			if (x.rule.meta.docs.extendsBaseRule === data.rule.id) return true
		}

		return false
	})

	const base = (
		all.find(data => data.provider === eslint)
		??
		all[0]
	)

	return {
		all,
		base,
		extend: all.filter(d => d !== base),
	}
}
