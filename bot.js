import { client as _client } from 'tmi.js'
import 'dotenv/config'
import { commands } from './commands.js'

const prefix = '!'

const opts = {
	identity: {
		username: process.env.USERNAME,
		password: process.env.PASSWORD,
	},
	channels: [process.env.CHANNEL],
}

const client = new _client(opts)

client.on('message', onMessageHandler)
client.on('connected', onConnectedHandler)

client.connect()

function onMessageHandler(target, tags, msg, self) {
	if (self || !msg.startsWith(prefix)) return

	const args = msg.slice(prefix.length).trim().split(/ +/)
	const input = args.shift().toLowerCase()

	const command = commands.find((cmd) => cmd.name === input)

	if (command) {
		console.log(`* ${tags.username} used ${command.name}`)
		client.say(target, command.response({ target, tags, msg }))
	} else {
		console.log(`* ${tags.username} used unknown ${input}`)
	}
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
	console.log(`* Connected to ${addr}:${port}`)
}
