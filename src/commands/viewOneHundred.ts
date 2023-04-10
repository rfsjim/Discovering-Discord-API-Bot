import { CommandInteraction, EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { getCamperData } from "../modules/getCamperData";
import { CommandInt } from "../types/CommandInt";

export const viewOneHundred:CommandInt = {
    data: new SlashCommandBuilder()
        .setName('view')
        .setDescription('Shows your latest 100 days of code check in.'),
    run: async (interaction:CommandInteraction) => {
        await interaction.deferReply();

        const {user} = interaction;

        const targetCamper = await getCamperData(user.id);
        if (!targetCamper.day) {
            await interaction.editReply({
                content: 
                'It appears you have not started the 100 Days of Code challenge, you can start by using the /100 command'
            });
            return;
        }

        const viewOneHundredEmbed = new EmbedBuilder();
        viewOneHundredEmbed.setTitle('100 Days of Code Progress');
        viewOneHundredEmbed.setDescription(
            `Here is my 100 Days of Code progress. I last reported an update on: ${new Date(targetCamper.timestamp).toString()}`);
        viewOneHundredEmbed.setAuthor({
            name: user.tag,
            iconURL: user.displayAvatarURL(),
        });
        viewOneHundredEmbed.addFields(
            {name:"Round", value: targetCamper.round.toString(), inline:true},
            {name:"Day", value: targetCamper.day.toString(), inline:true},
        );
        
        await interaction.editReply({embeds: [viewOneHundredEmbed]});
    }
};