import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Returns a greeting'),
    run: async (interaction:CommandInteraction) => {
        await interaction.reply({content: 'Initial hello',ephemeral: true });
        await interaction.followUp('Hello there! Again.');
    }
};