/// <reference path='_inquirer-autocomplete-prompt.d.ts'/>

import inquirer from 'inquirer'
import autocomplete from 'inquirer-autocomplete-prompt'

import { EslintProvider, providers } from './providers'
import { processRule } from './edit-config.processing'
import { RuleData } from './Rule'
import { rules, ruleToBundle } from './rules'

inquirer.registerPrompt(`autocomplete`, autocomplete)

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
	const providerAnswers = providers.map((provider) => ({
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

					return providerAnswers.filter(({ name }) => name.toLowerCase().includes(input.toLowerCase()))
				},
			},
		])
		.then(({provider}:{provider:EslintProvider}) => provider)
		.then(rulesForProvider)
	)
}

function selectRule (filteredRules:RuleData[]) {
	const ruleAnswers = filteredRules
	.map((data) => ({
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

					return ruleAnswers.filter(({ name }) => name.toLowerCase().includes(input.toLowerCase()))
				},
			},
		])
		.then(({rule}:{rule:RuleData}) => rule)
	)
}

async function randomRule (options = rules()) {
	if (options.length === 0) throw new Error(`no more rules left`)

	return options[Math.floor(options.length * Math.random())]!
}


//


function incompleteRules (filteredRules:RuleData[]) {
	return filteredRules.filter(({ exists }) => exists).filter(({ complete }) => !complete)
}

function newRules (filteredRules:RuleData[]) {
	return filteredRules.filter(({ exists }) => !exists)
}

function rulesForProvider (provider:EslintProvider) {
	return rules().filter(({ provider: { id } }) => id === provider.id)
}


//


function dispatch (data:RuleData) {
	return processRule(ruleToBundle(data))
}
