///<reference path='_inquirer-autocomplete-prompt.d.ts'/>

import inquirer from 'inquirer'
import autocomplete from 'inquirer-autocomplete-prompt'

import rules from './.rules-definitions'
import { EslintProvider, providers } from './providers'
import { processRule } from './edit-config.processing'
import { RuleDefinition } from './Rule'


inquirer.registerPrompt('autocomplete', autocomplete)


export function select () {
	return selectProvider()
	.then(selectRule)
	.then(processRule)
}

export function scoped () {
	return selectProvider()
	.then(randomRule)
	// @ts-ignore
	.then(processRule)
}

export function random() {
	return randomRule()
	// @ts-ignore
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
	)
}
function selectRule (provider:EslintProvider) {
	const ruleAnswers = rules
	.filter(({ providerId }) => providerId === provider.id)
	.map(rule => ({
		name: rule.key,
		value: rule,
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
		.then(({rule}:{rule:RuleDefinition}) => rule)
	)
}

async function randomRule (provider?:EslintProvider) {
	const options = (
		provider
		? rules.filter(({ providerId }) => providerId === provider.id)
		: rules
	)
	return options[Math.floor(options.length * Math.random())]
}
