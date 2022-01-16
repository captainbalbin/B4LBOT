# B4LBOT

B4LBOT is a chat bot for Twitch.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [TODO](#todo)

## Installation

1. Install application using `npm install`
2. Start bot with `npm start`

## Usage

| Command                        | Description     | User | Follower | Subscriber | Mod | Streamer |
| ------------------------------ | --------------- | ---- | -------- | ---------- | --- | -------- |
| `add <command> <description>`  | Adds a command  |      |          |            | x   | x        |
| `edit <command> <description>` | Edits a command |      |          |            | x   | x        |
| `delete <command>`             |                 |      |          |            | x   | x        |

## TODO

**CLI:**

- [ ] Add check if json file exist and/or is empty
- [ ] Add check if command still exist when adding
- [ ] Add delete command
- [ ] Add edit command

**Bot:**

- [ ] Use json file instead of js file for commands (in order to add commands via cli)
