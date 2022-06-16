const mongoose=require('mongoose');

const StudentModel=mongoose.Schema({
    name:String,
    email:String,
    skills:String,
    age:Number,
    location:String
},{
    timestamps:true
});
module.exports=mongoose.model('Student',StudentModel);