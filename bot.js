import { client as _client } from 'tmi.js'
import 'dotenv/config'

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

	const args = msg.slice(1).split(' ')
	const command = args.shift().toLowerCase()

	console.log(msg.startsWith(prefix))

	if (command === 'hello') {
		client.say(target, `Hello ${tags.username}!`)
		console.log(`* ${tags.username} used ${command}`)
	} else {
		console.log(`* ${tags.username} used unknown ${command}`)
	}
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
	console.log(`* Connected to ${addr}:${port}`)
}
