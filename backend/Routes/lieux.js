const express=require('express');
const router=express.Router();
const {addImages,addLieux,deleteLieux,deleteImage,addImagesToPost,getActivatedPosts,getImagesOfActiveLieu,getAllPosts}=require('../controllers/lieux.controller');

router.post('/add/images',addImages);
router.put('/add/post/:id',addLieux);
router.put('/edit/post/:id',addLieux);
router.delete('/delete/post/:id',deleteLieux);
router.put('/delete/image/:id',deleteImage);
router.put('/add/images/post/:id',addImagesToPost);
router.get('/get/all/active',getActivatedPosts);
router.get('/get/active/lieux/:id',getImagesOfActiveLieu);
router.get('/get/All/lieux',getAllPosts);

module.exports=router;