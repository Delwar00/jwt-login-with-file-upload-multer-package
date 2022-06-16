const mongoose=require('mongoose');

const AdminModel=mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name Field Required']
    },
    email:{
        type:String,
        required:[true,'Email Field Required'],
        unique:true
    },
    cell:{
        type:String,
        required:[true,'Cell Field Required'],
        unique:true
    },
    location:{
        type:String,
        default:'Dhaka'
    },
    password:String
});
module.exports=mongoose.model('Admin',AdminModel);