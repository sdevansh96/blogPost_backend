const jwt = require('jsonwebtoken');
const utils = require('util');

const tokenValidator = async (token) => {
    try {
        const tokenVerification =await jwt.verify(token, process.env.JWT_SECRET);
        return tokenVerification;
    } catch (e) {
        console.log('tpken errr')

    }
}
module.exports = tokenValidator;