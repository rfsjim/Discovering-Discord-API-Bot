import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { CommandInt } from "./../types/CommandInt";

export const editOneHundred:CommandInt = {
    data: new SlashCommandBuilder()
        .setName('edit')
        .setDescription('Edit a previous 100 days of code post.')
        .addStringOption((option) =>
            option
                .setName('embed-id')
                .setDescription('ID of the message to edit.')
                .setRequired(true))
        .addStringOption((option) =>
            option
                .setName('message')
                .setDescription('The message to go in your 100 Days of Code update.')
                .setRequired(true)) as SlashCommandBuilder,
    run:async (interaction) => {
        await interaction.deferReply();

        const {channel, user} = interaction;

        if (!interaction.isChatInputCommand()) return;
        const targetId = interaction.options.getString('embed-id', true);
        const text = interaction.options.getString('message', true);

        if (!text || !targetId) {
            await interaction.editReply({
                content: 'Missing required parameters.'
            });
            return;
        }

        if (!channel) {
            await interaction.editReply({
                content: 'Missing channel parameter.',
            });
            return;
        }

        const targetMessage = await channel.messages.fetch(targetId);

        if (!targetMessage) {
            await interaction.editReply({
                content: 'That message does not appear to be a valid mesage ID. Be sure that you are using this command in the same channel as the message.'
            });
            return;
        }

        const targetEmbed = targetMessage.embeds[0];

        if (targetEmbed.author?.name !== user.tag) {
            await interaction.editReply({
                content: 'This does not appear to be your 100 days of code post. You can not edit it'
            });
            return;
        }

        const updatedEmbed = new EmbedBuilder()
        updatedEmbed.setDescription(text);
        updatedEmbed.setTitle(targetEmbed.title);
        updatedEmbed.setAuthor(targetEmbed.author);
        updatedEmbed.addFields(targetEmbed.fields);
        updatedEmbed.setFooter(targetEmbed.footer);
        
        await targetMessage.edit({embeds:[updatedEmbed]});
        await interaction.editReply({content: "Updated!"});
    }
}