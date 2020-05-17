const PostModel=require('../Models/Post');
const mainFunct=require('../utils/mainFunctions');
const resHandler=require('../utils/resHandler');

exports.createPost=async(req,res,next)=>{
    console.log('000000 post ',req.body)
    try{
        const data=await mainFunct.createFunction(PostModel,req.body);
        resHandler.successHandler(res,data);
    }catch(e){
        resHandler.errorHandler(res,null,e)
    }

}

exports.getPost=async(req,res,next)=>{
    try{
        const document=await mainFunct.getAllHandler(PostModel);
        const data={
           data: document,
            count:document.length
        }
        resHandler.successHandler(res,data)
    }catch(e){
        resHandler.errorHandler(res,500,e)
    }

}