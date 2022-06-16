const { connect } = require('mongoose');
const Student=require('../models/studentModel');

const AllStudentData=async (req,res)=>{
    
     
    const StudentsData= await Student.find();
    if(StudentsData.length>0){
        res.status(201).json(StudentsData);
    }
    else{
        res.status(400).json({
            message:"Data Not found!"
        });   
    }
    

}
const AddStudentData= async (req,res)=>{
    const {name,email,skills,age,location}=req.body;
    if(!name || !email || !skills || !age || !location){
        res.status(400).json({
            message:"Student All Fields required"
        })
    }
   else{
        const StudentData=await Student.create(req.body);
        res.status(201).json({
            message:"Student Data Added Successfully!"
        })
   }

}
const SingleStudentData=async(req,res)=>{
    const id=req.params.id;
    const singleStudent=await Student.findById(id);
        res.status(404).json(singleStudent);
    
    // res.status(201).json(StudentSingleData);

}
const UpdateStudentData=async(req,res)=>{
    const id=req.params.id;
    await Student.findByIdAndUpdate(id,req.body,{
        new:true
    });
    res.status(200).json({
        message:"Data Updated Successfully!"
    })

}
const DeleteStudentData=async(req,res)=>{
    const id=req.params.id;
    const deleted_data=await Student.findByIdAndDelete(id);
    res.status(200).json({
        message:"Data Deleted Successfully!"
    })

}

module.exports={
    AllStudentData,
    AddStudentData,
    SingleStudentData,
    UpdateStudentData,
    DeleteStudentData
}