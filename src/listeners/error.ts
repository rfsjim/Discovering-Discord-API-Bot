import {Client} from 'discord.js';

export default (client:Client):void => {
    client.on('error',async (error) => {
        console.log('ERROR !!!');
        console.log(error);
    });
};