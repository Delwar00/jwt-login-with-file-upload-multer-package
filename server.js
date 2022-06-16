const express=require('express');
const dotenv=require('dotenv');
const multer=require('multer');
const path=require('path');
const connectDB=require('./config/db');
const app=express();

// const storage=multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './media/uploads')
//       },
//       filename: (req, file, cb)=> {
//         cb(null,'photo' + '-' + Date.now() + '-' + Math.round(Math.random() * 1E9)+'.png')
//       }
// });
// const upload=multer({
//     storage:storage
// })
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./media/uploads/')
    },
    filename:(req,file,cb)=>{
        // console.log(path.extname(file.originalname));
    //    const fileextension=file.originalname.split('.')[1];
    //    const filename=file.originalname.split('.')[0];
    //    cb(null,filename+'-'+Date.now()+Math.round(Math.random()+1000)+'.'+fileextension);

    //another way
    const fileextension=path.extname(file.originalname);
    cb(null,Date.now()+Math.round(Math.random()+1000)+'.'+fileextension);
    }
});
const upload=multer({
    storage:storage,
    limits:(1024*1024),
    fileFilter:(req,file,cb)=>{
        if(file.mimetype=='image/jpeg' || file.mimetype=='image/jpg' || file.mimetype=='image/png' ){
            cb(null,true)
        }
        else{
            cb(console.log("invalid image"))
        }
    }
})
//environment setup
dotenv.config();
const PORT=process.env.SERVER_PORT;
//db setup
connectDB();

//for express post submit data
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//student route setup
app.use('/api/students',require('./routes/studentRoute'));
app.use('/api/admins',require('./routes/adminRoute'));

app.post('/upload',upload.array('photo',12),(req,res)=>{
   res.send(req.files)
});
//router listerner
app.listen(PORT,()=>{
    console.log(`Our Server is running on ${PORT} port`)
});