const express=require('express');
const app =express();
var cors = require('cors');
var bodyParser = require('body-parser')
var morgan = require('morgan')

//Millde Wares
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'))

//Routers
const userRoute=require('./routes/userRouter');
const postRoute=require('./routes/postRouter');

app.use("/api/v1",userRoute);
app.use("/api/v1/post",postRoute)
app.use('/api/v1/test',(req,res,next)=>{
    res.status(200).json({
        message:'whattt'
    })
})
app.use('*',(req,res,next)=>{
    res.status(404).json({
        statusCode:404,
        message:'Route does not exist'
    })
})

module.exports=app;