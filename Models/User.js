const mongoose = require('mongoose');
const bctypt=require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim:true,
        lowercase:true,
        validate: {
            message: 'Email is not valid',
            validator: function (val) {
                const re = (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
                return re.test(val)
            }
        }
    },
        password: {
            type: String,
            required: true,
            select:false,
            minlength:6,
            trim: true
        },
        userImage:{
            type:String
        },
        createAt:{
            type:Date,
            default:Date.now()
        },
        role:{
            type:String,
            default:'user',
            enum:{
                values :['user','admin'],
                message:'Invalid Role'
            }

        },
        resetPasswordToken:String,
        resetPasswordExpirey:Date
});

//Encrypt Password
userSchema.pre('save',async function(next){
    if(!this.isModified('password')) next();
    console.log("fucker passowrd set karta hai",this)
    this.password=await bctypt.hash(this.password,12)
})
//Check password
userSchema.methods.checkPassword=async (dbPassword,userPassword)=>{
    return await bctypt.compare(userPassword,dbPassword)
}
const User=mongoose.model('User',userSchema);
module.exports=User;
