import chalk from 'chalk'
import figlet from 'figlet'
import clear from 'clear'
import fs from 'fs'
import pkg from './inquirer.cjs'
const { addCommand } = pkg

clear()

console.log(
	chalk.blue(figlet.textSync('BALBOT', { horizontalLayout: 'standard' }))
)

const run = async () => {
	const command = await addCommand()
	let commands = JSON.parse(fs.readFileSync('commands.json', null, 2))

	commands.push(command)

	fs.writeFileSync('commands.json', JSON.stringify(commands, null, 2))

	console.log(`Successfully added ${command}`)
}

run()
