import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('magic8ball')
        .setDescription('magic8ball gives random response based on magic 8 ball responses.'),
    run: async (interaction:CommandInteraction) => {
        let responses = ['It is certain','It is decidedly so','Without a doubt','Yes definitely',
        'You may rely on it','As I see it, yes','Most likely','Outlook good','Yes','Signs point to yes',
        'Reply hazy, try again','Ask again later','Better not tell you now','Cannot predict now',
        'Concentrate and ask again','Do not count on it','My reply is no','My sources say no',
        'Outlook not so good','Very doubtful'];
        
        let index = Math.floor((Math.random() * responses.length));

        await interaction.reply(`${responses[index]} 🎱`);
    }
};