export const commands = [
	{
		name: 'hello',
		response: (args) => `Hello ${args.tags.username}!`,
	},
	{
		name: 'bot',
		response: (args) => `I'm a work-in-progress and I don't know "${args.msg}"`,
	},
]
