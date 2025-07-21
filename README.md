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

## Possible Future Roadmap
- Stack Overflow Lookup
/so <query> — Returns the top Stack Overflow answer for a search term using StackExchange API
- Regex Tester
/regex <pattern> <test string> — Tests a regex pattern and returns matches, highlights groups, etc.
- Code Snippet Formatter
/format <language> <code> — Automatically formats code snippets and wraps them in proper Discord markdown.
- NPM Package Lookup
/npm <package> — Retrieves metadata (version, description, links) about an npm package.
- GitHub Issue/PR Watcher
/watch <repo> — Notifies channel when a new issue or PR is opened or closed in a repo
- Pomodoro Timer
/pomodoro [work=25] [break=5] — Start a Pomodoro session with timers and reminders in the channel or DMs.
- Daily Dev Tip
Posts a random dev tip (you could curate your own JSON/Markdown file or pull from a source).
- Code Review Roulette
/reviewme — Randomly pairs users who opt in for reviewing each other’s code.
- Flashcard Quizzer
/quiz start — Start a session with JavaScript/TypeScript/Dev-related questions from a prebuilt deck.
- Achievement Badges
Give badges for milestones like “First PR”, “10 Pomodoros completed”, “100 lines of code today”, etc.
- Quote of the Day
/qotd — Shares a random motivational quote or dev-related wisdom.

Or Or… OR… hear me out — we base the entire bot’s personality on me. I mean, think about it: charm, intelligence, devastating good looks, a deeply complex emotional core I refuse to acknowledge… It practically codes itself, Lana, LANA, LAAANAAAA!!!