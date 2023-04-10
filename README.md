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
- help command `/help` - shows available commands and usage