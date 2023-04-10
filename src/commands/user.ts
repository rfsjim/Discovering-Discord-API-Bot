import { CommandInteraction, GuildMember, SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provides information about the user.'),
    run: async (interaction:CommandInteraction) => {
        const member = interaction.guild?.members.cache.get(interaction.user.id) as GuildMember;

        await interaction.reply(`This command was run by ${interaction.user.username}, who joined on 
        ${member.joinedAt}.`);
    }
};