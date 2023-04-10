import {CommandInteraction} from "discord.js";

import {
    SlashCommandBuilder,
    SlashCommandSubcommandsOnlyBuilder
} from "@discordjs/builders"

export interface CommandInt {
    data: Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand"> |
    SlashCommandSubcommandsOnlyBuilder;
    run: (interacton: CommandInteraction) => Promise<void>;
}