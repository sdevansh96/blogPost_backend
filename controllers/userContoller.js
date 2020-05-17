const UserModel = require('../Models/User');
const resHandler = require('../utils/resHandler')
const tokenGenerator = require('../utils/tokenGenerator');
const mainFunct = require('../utils/mainFunctions');

exports.userSignUpHandler = async (req, res, next) => {
    try {
        console.log("echck thsii ", req.body)
        let body = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,

        }
        const user = await mainFunct.createFunction(UserModel, body)
        user.password = undefined;
        token = tokenGenerator(user)
        user.toke = token
        let data = {
            user,
            token
        }
        resHandler.successHandler(res, data)
    } catch (e) {
        console.log(e)
        resHandler.errorHandler(res, null, e)
    }

}

exports.loginHandler = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password) resHandler.errorHandler(res, 400, 'email/password is required')
        let user = await UserModel.findOne({
            email
        }).select("+password")
        if (!user) resHandler.errorHandler(res, 400, 'No user found')
        const passwordVerify = await user.checkPassword(user.password, password)
        if (!passwordVerify) resHandler.errorHandler(res, 400, 'password is invalid')
        user.password = undefined;

        const token = tokenGenerator(user);

        let data = {
            user,
            token
        }
        resHandler.successHandler(res, data)
    }
    catch (e) {
        console.log(e)
        resHandler.errorHandler(res)
    }
}