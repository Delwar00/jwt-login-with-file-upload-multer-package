const express=require('express');
const { AllStudentData, AddStudentData, SingleStudentData, UpdateStudentData, DeleteStudentData } = require('../controllers/studentController');
const router=express.Router();

router.get('/',AllStudentData);
router.post('/',AddStudentData);
router.get('/:id',SingleStudentData);
router.put('/:id',UpdateStudentData);
router.patch('/:id',UpdateStudentData);
router.delete('/:id',DeleteStudentData);

module.exports=router;
