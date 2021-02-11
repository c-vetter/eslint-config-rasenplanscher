///<reference path='_inquirer-autocomplete-prompt.d.ts'/>

import inquirer from 'inquirer'
import autocomplete from 'inquirer-autocomplete-prompt'
import { pathExistsSync } from 'fs-extra'

import allRules from './.rules-definitions'
import { EslintProvider, providers } from './providers'
import { processRule } from './edit-config.processing'
import { RuleData, RuleDefinition } from './Rule'
import { rulesConfigurations, rulesDefinitions } from './paths'


inquirer.registerPrompt('autocomplete', autocomplete)

const rules = allRules.map(ruleData)


export function select () {
	return selectProvider()
	.then(selectRule)
	.then(processRule)
}
export function selectNew () {
	return selectProvider()
	.then(newRules)
	.then(selectRule)
	.then(processRule)
}

export function scoped () {
	return selectProvider()
	.then(randomRule)
	.then(processRule)
}
export function scopedNew () {
	return selectProvider()
	.then(newRules)
	.then(randomRule)
	.then(processRule)
}

export function random () {
	return randomRule()
	.then(processRule)
}
export function randomIncomplete () {
	return randomRule(incompleteRules(rules))
	.then(processRule)
}
export function randomNew () {
	return randomRule(newRules(rules))
	.then(processRule)
}


function selectProvider () {
	const providerAnswers = providers.map(provider => ({
		name: provider.name,
		value: provider,
	}))

	return (
		inquirer.prompt([
			{
				type: 'autocomplete',
				name: 'provider',
				message: 'Provider:',
				async source(_:{}, input:string='') {
					if(!input) return providerAnswers
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
				type: 'autocomplete',
				name: 'rule',
				message: 'Rule:',
				async source(_:{}, input:string='') {
					if(!input) return ruleAnswers
					return ruleAnswers.filter(({ name }) => name.includes(input))
				},
			},
		])
		.then(({rule}:{rule:RuleData}) => rule)
	)
}

async function randomRule (options = rules) {
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
	return rules.filter(({ provider: { id } }) => id === provider.id)
}

function ruleData (rule:RuleDefinition) : RuleData {
	const provider = providers.find(({ id }) => id === rule.providerId)
	if (!provider) throw new Error(`No provider found for rule ${rule.id}`)

	const configFile = rulesConfigurations(provider.name, `${rule.key}.ts`)
	const typingFile = rulesConfigurations(provider.name, `${rule.key}.d.ts`)
	const reasonFile = rulesConfigurations(provider.name, `${rule.key}.md`)
	const definitionFile = rulesDefinitions(provider.name, `${rule.key}.ts`)

	const existance = [
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
		exists: existance.some(x=>(x===true)),
		complete: existance.every(x=>(x===true)),
	}
}
