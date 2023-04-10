import {CommandInteraction, SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder} from "discord.js";

export interface CommandInt {
    data: Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand"> |
    SlashCommandSubcommandsOnlyBuilder;
    run: (interacton: CommandInteraction) => Promise<void>;
}