# Learning to Work With Discord Bots

Discord Bot written in Typescript using discord.js v14.9

Based around code ideas from *freeCodeCamp*, *Coding Train*, *DisStreamBot* and *discord.js* examples.

## Uses node and npm
- Build with `npm run build`
- Run with `npm run start`

### Required Permissions
Along with the default permissions, ensure that the role the bot is using has
- For command interactions `Use Application Commands`
- For editing brag 100 days of coding post messages `Read Message History`

## Current Commands
- A greeting command `/hello`
- A magic eight ball `/magic8ball`- Provides answers from list of premade replies
- Marvellous command `/marvellous` - Responds to marvellous with crickets
- One Hundred Days of code tracker command `/100` - Tracks users progress with 100 days of code challenge
- Edit One Hundred Days of code posts command `/edit` - Allows editing of previous brag post
- Server command `/server` - provides details on the server
- User command `/user` - with information about user specified
- ping command `/ping` - responds with Pong! (to do ping to bot & user in ms)

## ToDo

### Additions to current commands
- Add Help Command help -- Bot Commands - available commands, tip,
- Add userinfo (@username) -- Information about user - online/offline, username, playing..., account created, joined the server, ID, bot or not, list roles

### RPG Style Discord Application - Text based adventure game
One fun idea for an RPG-style Discord bot could be a text-based adventure game. The bot could prompt players with different scenarios and give them a variety of options to choose from, with the outcome of each choice affecting the overall storyline.

Players could create their own character with different stats and abilities that would help them succeed in battles and overcome challenges. The bot could roll virtual dice to determine the success or failure of different actions, creating an element of chance and excitement.

To make the game even more engaging, the bot could also include mini-games and puzzles that players must solve in order to progress through the story. As players advance through the game, they could earn experience points and level up, gaining new abilities and becoming more powerful.

To add an element of competition, the bot could keep track of high scores and rankings, allowing players to compete with each other for bragging rights and prizes. With a well-designed storyline, engaging gameplay mechanics, and social elements like chat rooms and forums, this RPG-style Discord bot could provide hours of entertainment for players of all ages and skill levels.