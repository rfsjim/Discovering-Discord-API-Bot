import { EmbedBuilder } from "@discordjs/builders";
import { SlashCommandBuilder } from "discord.js";
import { CommandInt } from "../types/CommandInt";

export const help:CommandInt = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Provides information on using this bot.'),
    run: async (interaction) => {
        await interaction.deferReply();

        const helpEmbed = new EmbedBuilder();
        helpEmbed.setTitle('Help');
        helpEmbed.setDescription('This bot is an exploration of coding and working with the discord API.');
        helpEmbed.addFields(
            {name: 'Get a friendly greeting', value: 'Use the `/hello` command for a friendly greeting'},
            {name: 'Get an answer to a yes or no question', value: 'Use the `/magic8ball` command for an answer to a yes or no question'},
            {name: 'Want a throwback to 1991', value: 'Use the `/marvellous` command for a nod to M.C.G.HAMMER'},
            {name: 'Ping Pong', value: 'Use the `/ping` command'},
            {name: 'Get details about the server', value: 'Use the `/server` command'},
            {name: 'Get details about the user', value:'Use the `/user` command for details about the user'},
            {name: 'Create a 100 days of code update for today', value: 'Use the `/100` command to create your update for today. The `message` will be displayed in your embed.'},
            {name: 'Edit your 100 days of code update', value: 'Do you see a typo in your embed? Right click it and copy the ID (you may need developer mode on for this), and use the `/edit` command to update that embed with a new message.'},
            {name: 'Show your 100 days of code update', value: 'To see your current progress in the challenge, and the day you last checked in, use `/view`.'}
        );
        helpEmbed.setFooter({text: `Version ${process.env.npm_package_version}`});
        await interaction.editReply({embeds: [helpEmbed]});
    }
}