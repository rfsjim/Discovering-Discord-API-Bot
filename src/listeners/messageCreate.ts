import {Client, Message} from 'discord.js';

export default (client:Client): void => {
    client.on('messageCreate',async (msg) => {
        if (!msg.author.bot && msg.channel.id === '1092379967859478528') {
            if (msg.content.startsWith('!magic8ball')) {
                // msg.reply(magic8ball());
            }
        }
    });
};
