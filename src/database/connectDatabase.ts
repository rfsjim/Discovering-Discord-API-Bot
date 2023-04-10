import { connect } from "mongoose";
const config = require('./../../config.json');

export const connectDatabase =async () => {
    await connect(config.mongo_uri as string);
    console.log('Database connected!');
};