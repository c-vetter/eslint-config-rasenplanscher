import inquirer from 'inquirer'

import { random, randomIncomplete, randomNew, scoped, scopedNew, select, selectNew } from './edit-config.strategies'


inquirer.prompt([
	{
		type: `list`,
		name: `strategy`,
		message: `Strategy:`,
		choices: [
			{
				name: `random, new`,
				value: randomNew,
			},
			{
				name: `random, incomplete`,
				value: randomIncomplete,
			},
			{
				name: `random, all`,
				value: random,
			},
			{
				name: `scoped, new`,
				value: scopedNew,
			},
			{
				name: `scoped, all`,
				value: scoped,
			},
			{
				name: `select, new`,
				value: selectNew,
			},
			{
				name: `select, all`,
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
					type: `confirm`,
					name: `next`,
					message: `Next?`,
					default: true,
				},
			])
		))
		.then(({ next }:{ next:boolean }) => (
			next && proceed(strategy)
		))
	)
}
