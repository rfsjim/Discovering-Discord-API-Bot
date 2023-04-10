import { CommandInt } from "../types/CommandInt";
import { oneHundred } from "./oneHundred";
import { editOneHundred } from "./editOneHundred";
import { viewOneHundred } from "./viewOneHundred";
import hello from "./hello";
import magic8ball from "./magic8ball";
import marvellous from "./marvellous";
import ping from "./ping";
import server from "./server";
import user from "./user";
import { help } from "./help";

export const CommandList:CommandInt[] = [
    oneHundred,
    editOneHundred,
    viewOneHundred,
    hello,
    magic8ball,
    marvellous,
    ping,
    server,
    user,
    help
];