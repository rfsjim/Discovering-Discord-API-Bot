import { model, Schema } from "mongoose";
import { CamperInt } from "../../types/CamperInt";

export const Camper = new Schema({
    discordId: String,
    round: Number,
    day: Number,
    timestamp: Number,
});

export default model<CamperInt>("camper",Camper);