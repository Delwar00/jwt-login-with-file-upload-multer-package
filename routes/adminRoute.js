const express=require('express');
const { AllAdminData, AddAdminData, singleAdminData, deleteAdminData, updateAdminData, adminHome, adminProfile } = require('../controllers/adminController');
const { adminLogin } = require('../controllers/authController');
const { authCheck } = require('../middleware/authMiddleware');
const router=express.Router();

router.get('/profile',authCheck,adminProfile);
router.get('/home',authCheck,adminHome);
router.route('/').get(AllAdminData).post(AddAdminData);
router.route('/:id').get(singleAdminData).put(updateAdminData).patch(updateAdminData).delete(deleteAdminData);
router.post('/login',adminLogin);


module.exports=router;