const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')

async function getUser(email) {
    try {
        const collection = await dbService.getCollection('user')
        const query = { email: email }
        const user = await collection.findOne(query)
        return user;
    } catch (err) {
        logger.error(`cannot find user ${email}`, err)
        throw err
    }
}



module.exports = {
    getUser,
}