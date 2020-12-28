import inquirer from 'inquirer'

import { random, scoped, select } from './edit-config.strategies'


inquirer.prompt([
	{
		type: 'list',
		name: 'strategy',
		message: 'Strategy:',
		choices: [
			{
				name: 'random',
				value: random,
			},
			{
				name: 'scoped',
				value: scoped,
			},
			{
				name: 'select',
				value: select,
			},
		],
	},
])
.then(({ strategy }) => proceed(strategy))


function proceed (strategy:Function) {
	return (
		strategy()
		.then(() => (
			inquirer.prompt([
				{
					type: 'confirm',
					name: 'next',
					message: 'Next?',
					default: true,
				},
			])
		))
		.then(({ next }:{ next:boolean }) => (
			next && proceed(strategy)
		))
	)
}
