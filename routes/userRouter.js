const UserModel=require('../Models/User');
const express=require('express');
const router=express.Router();


//Contollers
const userContoller=require('../controllers/userContoller');

router.post("/signup",userContoller.userSignUpHandler);
router.post("/login",userContoller.loginHandler);



module.exports=router