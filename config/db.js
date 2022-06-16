const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        let connect=await mongoose.connect(process.env.MONGODB_CONNECT);
        console.log('Database conection successfully');
    }
    catch(err){
        console.log(err);
    }
}
    


module.exports=connectDB;
