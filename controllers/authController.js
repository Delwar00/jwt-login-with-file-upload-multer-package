const Admin=require('../models/adminModel');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

const adminLogin=async(req,res)=>{
    const {email,password}=req.body;
    const admin_email=await Admin.findOne({email});
    // console.log(email);
    if(!admin_email){
        res.status(400).json({
            message:"Admin email doesn't match!"
        });
    }
    else{
        if(await bcrypt.compare(password,admin_email.password)){
            //jwt token create 
            const token=jwt.sign({id:admin_email._id,name:admin_email.name},process.env.JWT_SECRET,{
                expiresIn:'1d'
            });

            res.status(400).json({
                id:admin_email._id,
                name:admin_email.name,
                email:admin_email.email,
                cell:admin_email.cell,
                token:token
            }); 
        }
        else{
            res.status(400).json({
                message:"password can not match !"
            });
        }
    }
    
}

module.exports={
    adminLogin
}