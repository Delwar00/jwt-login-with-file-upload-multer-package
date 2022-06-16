const jwt=require('jsonwebtoken');
const Admin = require('../models/adminModel');
//auth middleware
const authCheck=async(req,res,next)=>{
//   console.log();
  if(req.headers.authorization){

    const token=req.headers.authorization.split(' ')[1];
    const token_verify=jwt.verify(token,process.env.JWT_SECRET);
    
    req.user_login_data=await Admin.findById(token_verify.id);
    // console.log(admin_user_login_data);
    next();

  }
  else{
    res.json({
        message:"Token Not found"
    })
  }
  
}
module.exports={
    authCheck
}