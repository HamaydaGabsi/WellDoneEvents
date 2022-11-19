const express=require('express');
const router=express.Router();
const {addPost,addPostImage,deletePost,modifyImage,activatedAccueilPosts,allAccueilPosts}=require('../controllers/services.controller');

router.post('/add/image',addPostImage);
router.put('/add/post/:id',addPost);
router.delete('/delete/post/:id',deletePost);
router.put('/modify/image/:id',modifyImage);
router.get('/active/post',activatedAccueilPosts);
router.get('/all/post',allAccueilPosts);

module.exports=router;