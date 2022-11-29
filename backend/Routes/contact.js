const express=require('express');
const router=express.Router();
const {addContact,deleteContact,modifyContact,contactPagination,searchContactByTel}=require('../controllers/contact.controller')

router.post('/add/contact',addContact);
router.delete('/delete/contact/:id',deleteContact);
router.put('/modify/contact/:id',modifyContact);
router.get('/get/contacts/:page',contactPagination);
router.get('/get/contact/bytel/:tel',searchContactByTel);

module.exports=router;