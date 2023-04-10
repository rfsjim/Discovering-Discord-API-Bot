const config = require('./../../config.json');

export const validateConfig = () => {
    if (!config.token) {
        console.warn('Missing Discord Bot Token');
        return false;
    }

    if (!config.mongo_uri) {
        console.warn('Mising Mongoose DB connection');
        return false;
    }

    return true;
};