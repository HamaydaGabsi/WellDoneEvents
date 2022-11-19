const express=require('express');
const router=express.Router();
const {addCarousel,deleteCarousel,activateDeactivate,activatedCarousels,allCarousels}=require('../controllers/carousel.controller');

router.post('/add/carousel',addCarousel);
router.delete('/delete/carousel/:id',deleteCarousel);
router.put('/modify/carousel/:id',activateDeactivate);
router.get('/active/carousels',activatedCarousels);
router.get('/all/carousels',allCarousels);
module.exports=router;