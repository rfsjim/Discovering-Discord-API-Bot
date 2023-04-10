import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Provides information about the server'),
    run: async (interaction:CommandInteraction) => {
        await interaction.reply(
            `This server is ${interaction.guild?.name}\nTotal members: ${interaction.guild?.memberCount}`);
    }
};