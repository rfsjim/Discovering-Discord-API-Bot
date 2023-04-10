import { SlashCommandBuilder } from "@discordjs/builders";
import { EmbedBuilder, CommandInteraction} from "discord.js";
import { CommandInt } from "../types/CommandInt";
import { getCamperData } from "../modules/getCamperData";
import { updateCamperData } from "../modules/updateCamperData";

export const oneHundred:CommandInt = {
    data: new SlashCommandBuilder()
        .setName('100')
        .setDescription('Check in for the 100 Days of Code challenge.')
        .addStringOption((option) =>
            option
                .setName('message')
                .setDescription('The message to go in your 100 Days of Code update.')
                .setRequired(true)),
    run: async (interaction:CommandInteraction) => {
        await interaction.deferReply();
        
        const {user} = interaction;

        if (!interaction.isChatInputCommand()) return;
        const text = interaction.options.getString('message',true);     

        const targetCamper = await getCamperData(user.id);
        const updatedCamper = await updateCamperData(targetCamper);

        const oneHundredEmbed = new EmbedBuilder();
        oneHundredEmbed.setTitle('100 Days of Code');
        oneHundredEmbed.setDescription(text);
        oneHundredEmbed.setAuthor({
            name: user.tag,
            iconURL: user.displayAvatarURL(),
        });
        oneHundredEmbed.addFields(
            {name:"Round", value: updatedCamper.round.toString(), inline:true},
            {name:"Day", value: updatedCamper.day.toString(), inline:true},
        );
        oneHundredEmbed.setFooter({text:"Day Completed: "+new Date(updatedCamper.timestamp).toString()});

        await interaction.editReply({embeds: [oneHundredEmbed]});
    }
};