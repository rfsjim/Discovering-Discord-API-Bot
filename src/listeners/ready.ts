import {Client, Events, REST} from 'discord.js';
import { CommandList } from './../commands/_CommandList';
import { Routes } from 'discord-api-types/v9';

const config = require('./../../config.json');

export default (client: Client): void => {
    client.once(Events.ClientReady,async () => {
        if (!client.user || !client.application) {
            return;
        }

        const rest = new REST({version: "9"}).setToken(config.token as string);
        const commandData = CommandList.map((command) => command.data.toJSON());
        
        await rest.put(Routes.applicationGuildCommands(client.user?.id||"missing id",config.guildID as string),
    {body:commandData});
    
    console.log(`${client.user.username} (${client.user.tag}) is online`);
    console.log('🤖 Bot is now ready');
    });
};