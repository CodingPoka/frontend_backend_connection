


const express = require('express');
const { studentRegisterController, studentLoginController } = require('../controllers/student.Controller');
const router=express.Router();


router.post("/register",studentRegisterController);

router.post("/login",studentLoginController);


module.exports=router;