const Admin=require('../models/adminModel');
const asyncHandler = require('express-async-handler')

const bcrypt=require('bcryptjs');

const AllAdminData=asyncHandler(async(req,res)=>{
    const admin_data=await Admin.find();
    res.status(400).json(admin_data);
});
const AddAdminData=asyncHandler(async(req,res)=>{
    const {name,email,cell,location,password}=req.body;
    const salt=bcrypt.genSaltSync(10);
    const hash_password=bcrypt.hashSync(password,salt);
    // console.log(hash_password);
    await Admin.create({
        ...req.body,
        password:hash_password
    });
    res.status(400).json({
        message:"Admin Data Added Successfully"
    });
});
const singleAdminData=asyncHandler(async(req,res)=>{
    const id=req.params.id;
    const single_data=await Admin.findById(id);
    res.status(400).json(single_data);
});
const updateAdminData=asyncHandler(async(req,res)=>{
    const id=req.params.id;
    await Admin.findByIdAndUpdate(id,req.body,{
        new:true
    })
    res.status(400).json({
        message:"Data Updated Successfully"
    });
});
const deleteAdminData=asyncHandler(async (req,res)=>{
    const id=req.params.id;
    const deleted_data=await Admin.findByIdAndDelete(id);
    res.status(400).json({
        message:"Data Deleted Successfully"
    });
});
const adminProfile=asyncHandler(async (req,res)=>{
    res.json(req.user_login_data);
});
const adminHome=asyncHandler(async (req,res)=>{
    res.json(req.user_login_data);
});
module.exports={
    AllAdminData,
    AddAdminData,
    singleAdminData,
    updateAdminData,
    deleteAdminData,
    adminProfile,
    adminHome
}