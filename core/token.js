const asyncRedis = require("async-redis");
const asyncRedisClient = asyncRedis.decorate(client);
const crypto = require('crypto-promise');

//generate token for user and save it in redis if user doesnt exist

async function generateToken() {
    try {
        let hash = await crypto.randomBytes(48);
        return hash.toString('hex');
    } catch (error) {
        throw new Error('error generate token');
    }
}