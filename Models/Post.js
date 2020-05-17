const mongoose =require('mongoose');

const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Post title is required'],
        index: true, 
        unique: true,
        trim:true,
        maxlength:4
    },
    description:{
        type:String,
        required:[true,"A Post must have a description"],
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

const Post=mongoose.model('Post',postSchema);

module.exports=Post;