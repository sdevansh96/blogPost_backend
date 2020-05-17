const tokenValidator = require('../utils/tokenValidator');
const resHandler = require('../utils/resHandler');
const UserModel=require('../Models/User');

const protect =async (req, res, next) => {
    try{
        let token = req.headers.authorization;
        if (!token) resHandler.errorHandler(res, 400, 'Token is required')
        const validateToken =await tokenValidator(token);
        if(!validateToken){
            resHandler.errorHandler(res,401,'Inavlid Token')
        }
        
        const user=await UserModel.findById(validateToken.id);
        if(!user)  resHandler.errorHandler(res,401,'Inavlid Token, User does not exist')
        next();
    
    }catch(e){
        console.log('catccccccc 0000')
        resHandler.errorHandler(res,500,e)
    }
   
}

module.exports = protect;