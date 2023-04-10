import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Traditional Ping Pong Reply Function responds to ping command'),
    run: async (interaction:CommandInteraction) => {
        let areBot = '';
        let outgoingMsg;
        if (interaction.user.bot) {
            areBot = 'are';
        } else {
            areBot = 'are not';
        }
    
        outgoingMsg = `Pong ${interaction.user.username} (${interaction.user.tag}). You ${areBot} a bot. 🤖`;

        await interaction.reply(outgoingMsg);
    }
};