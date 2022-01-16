const inquirer = require('inquirer')

module.exports = {
	addCommand: () => {
		const commands = [
			{
				name: 'name',
				type: 'input',
				message: 'Enter the name of the command:',
				validate: (input) => (input ? true : `Please enter a command name`),
			},
			{
				name: 'response',
				type: 'input',
				message: 'Enter the response from the command:',
				validate: (input) => (input ? true : `Please enter a command name`),
			},
		]
		return inquirer.prompt(commands)
	},
}
