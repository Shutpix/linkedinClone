const express=require('express');
const router=express.Router();

router.use('/users',require('./users'));
router.use('/educations',require('./educations'));
router.use('/experiences',require('./experiences'));
router.use('/posts',require('./posts'));
router.use('/projects',require('./projects'));

module.exports=router;