// import discordjs classes
import {Client} from 'discord.js';

// import mongosedb class
import { connectDatabase } from './database/connectDatabase';

// import custom modules
import ready from "./listeners/ready";
import messageCreate from "./listeners/messageCreate";
import interactionCreate from "./listeners/interactionCreate";
import error from "./listeners/error";
import { IntentOptions } from './config/IntentOptions';
import { validateConfig } from './utils/validateConfig';

// import typescript definitions
// Todo

// login credentials
const config = require('./../config.json');

(async () => {
    // validate config file at config.json
    if (!validateConfig()) return;

    // log status of script
    console.log("⚙ Configuration Validated");

    const client:Client = new Client ({intents: IntentOptions});
    console.log("🤖 Bot is now starting...")

    ready(client);
    error(client);
    messageCreate(client);
    interactionCreate(client); 
    
    // MongooseDB connection
    await connectDatabase();

    // Discord connection
    client.login(config.token);
})();