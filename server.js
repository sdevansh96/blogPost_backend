const app = require('./app');
const mongoose=require('mongoose')
const dotenv=require('dotenv');
dotenv.config({
    path:'./config.env'
})

const dbConnect=process.env.DB.replace('<password>',process.env.DB_PASSWORD)
mongoose.connect(dbConnect,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology:true
}).then(res=>{
    console.log("db is connected")
}).catch(e=>{
    console.log('DB connection errr')
})

app.listen(process.env.PORT,()=>{
    console.log('Server is running on port '+ process.env.PORT)
})