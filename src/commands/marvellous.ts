import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('marvellous')
        .setDescription('Everything, everything is marvellous'),
    run: async (interaction:CommandInteraction) => {
        await interaction.reply('🏏🦗🏏');
    }
};