import { Client, Interaction } from 'discord.js';
import { CommandList } from '../commands/_CommandList';

export default (client:Client): void => {
    client.on("interactionCreate",async (interaction:Interaction) => {
       if (interaction.isCommand()) {
        for (const Command of CommandList) {
            if (interaction.commandName === Command.data.name) {
                await Command.run(interaction);
                break;
            }
        }
       }
    });
};