const express=require('express');
const Router =express.Router();
const postController=require('../controllers/postContoller');
const protect=require('../controllers/protectContoller');


Router.route('/')
.post(protect,postController.createPost)
.get(protect,postController.getPost)


module.exports=Router;