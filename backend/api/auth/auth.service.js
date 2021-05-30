const bcrypt = require('bcrypt')
const userService = require('../user/user.service')
const logger = require('../../services/logger.service')
const dbService = require('../../services/db.service')

async function login(email, password) {
    logger.debug(`trying to login with email: ${email}`);
    const user = await userService.getUser(email);
    if (!user) return Promise.reject('Invalid email or pa;ssword');
    const match = await bcrypt.compare(password, user.password);
    console.log('login info', password, user.password);
    if (!match) return Promise.reject('Invalid email or password');
    logger.debug(`logined successfully with email: ${email}`);
    delete user.password;
    return user;
}

async function signup(userInfo) {
    try {
        const user = await _createUser(userInfo);
        const collection = await dbService.getCollection('user');
        await collection.insertOne(user);
        return user;
    } catch (err) {
        logger.error('cannot signup user', err);
        throw err;
    }
}



async function _createUser(userInfo) {
    const saltRounds = 10
    const { fullName, email, password } = userInfo;
    const hash = await bcrypt.hash(password, saltRounds)

    return {
        fullName,
        email,
        password: hash,
        createdAt: Date.now(),
    }
}



module.exports = {
    signup,
    login,
}