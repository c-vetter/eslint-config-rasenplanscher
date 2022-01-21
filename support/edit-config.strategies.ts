///<reference path='_inquirer-autocomplete-prompt.d.ts'/>

import inquirer from 'inquirer'
import autocomplete from 'inquirer-autocomplete-prompt'
import { pathExistsSync } from 'fs-extra'

import allRules from './.rules-definitions'
import { EslintProvider, providers } from './providers'
import { processRule } from './edit-config.processing'
import { RuleData, RuleDefinition } from './Rule'
import { rulesConfigurations, rulesDefinitions } from './paths'


inquirer.registerPrompt(`autocomplete`, autocomplete)

const rules = () => allRules.map(ruleData)


export function select () {
	return selectProvider()
	.then(selectRule)
	.then(dispatch)
}
export function selectNew () {
	return selectProvider()
	.then(newRules)
	.then(selectRule)
	.then(dispatch)
}

export function scoped () {
	return selectProvider()
	.then(randomRule)
	.then(dispatch)
}
export function scopedNew () {
	return selectProvider()
	.then(newRules)
	.then(randomRule)
	.then(dispatch)
}

export function random () {
	return randomRule()
	.then(dispatch)
}
export function randomIncomplete () {
	return randomRule(incompleteRules(rules()))
	.then(dispatch)
}
export function randomNew () {
	return randomRule(newRules(rules()))
	.then(dispatch)
}


function selectProvider () {
	const providerAnswers = providers.map(provider => ({
		name: provider.name,
		value: provider,
	}))

	return (
		inquirer.prompt([
			{
				type: `autocomplete`,
				name: `provider`,
				message: `Provider:`,
				async source (_:never, input:string = ``) {
					if (!input) return providerAnswers
					return providerAnswers.filter(({ name }) => name.includes(input))
				},
			},
		])
		.then(({provider}:{provider:EslintProvider}) => provider)
		.then(rulesForProvider)
	)
}
function selectRule (rules:RuleData[]) {
	const ruleAnswers = rules
	.map(data => ({
		name: data.rule.key,
		value: data,
	}))

	return (
		inquirer.prompt([
			{
				type: `autocomplete`,
				name: `rule`,
				message: `Rule:`,
				async source (_:never, input:string = ``) {
					if (!input) return ruleAnswers
					return ruleAnswers.filter(({ name }) => name.includes(input))
				},
			},
		])
		.then(({rule}:{rule:RuleData}) => rule)
	)
}

async function randomRule (options = rules()) {
	return options[Math.floor(options.length * Math.random())]
}


//


function incompleteRules (rules:RuleData[]) {
	return rules.filter(({ exists }) => exists).filter(({ complete }) => !complete)
}

function newRules (rules:RuleData[]) {
	return rules.filter(({ exists }) => !exists)
}

function rulesForProvider (provider:EslintProvider) {
	return rules().filter(({ provider: { id } }) => id === provider.id)
}

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
		exists: existence.some(x=>(x === true)),
		complete: existence.every(x=>(x === true)),
	}
}


//


function dispatch (data:RuleData) {
	const all = rules().filter((x) => {
		if (x.rule.key === data.rule.key) return true

		if (typeof data.rule.meta.docs.extendsBaseRule === `string`) {
			if (x.rule.key === data.rule.meta.docs.extendsBaseRule) return true
		}

		if (typeof x.rule.meta.docs.extendsBaseRule === `string`) {
			if (x.rule.meta.docs.extendsBaseRule === data.rule.key) return true
		}

		return false
	})

	const base = (
		all.find(d => !d.rule.meta.docs.extendsBaseRule)
		||
		all[0]
	)

	const bundle = {
		all,
		base,
		extend: all.filter(d => d !== base),
	}

	return processRule(bundle)
}
