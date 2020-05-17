const jwt=require('jsonwebtoken');

const tokenGenerator=(user)=>{
    console.log('oooooooo',user)
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIREY
    });
    return token
}

module.exports=tokenGenerator;