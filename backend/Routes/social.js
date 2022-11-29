const express=require('express');
const router=express.Router()
const {addSocial,addSocialUrl,getSocial}=require('../controllers/social.controller');
router.post('/add/social',addSocial);
router.put('/add/social/url',addSocialUrl);
router.get('/get/social',getSocial);

module.exports=router;