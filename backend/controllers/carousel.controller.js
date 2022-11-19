const Carousel=require('../Models/Carousel');
const storage = require("../helpers/multer");
const multer = require("multer");
const cloudinary=require('../helpers/cloudinary');
const fs = require("fs");

exports.addCarousel=async (req,res)=>{
    try {
        const upload = multer({ storage }).any("image");
        upload(req, res, async (err) => {
          if (req.files) {
            const files = req.files;
            let result = {};
            let cloudinary_ids = [];
            let pictures = [];
            for (const file of files) {
              const { path } = file;
              result = await cloudinary.uploader.upload(path);
              cloudinary_ids.push(result.public_id);
              pictures.push(result.secure_url);
              fs.unlinkSync(path);
            }
            if (result) {
              const {image}=req.body;
              const carousel=new Carousel({image:pictures[0],isActive:true});
              await carousel.save()
              .then((data)=> res.status(200).send({message:"image added",data}))
              .catch(err => res.status(406).send('error'));
            } else {
              res.status(400).send({ error: "cannot upload" });
            }
          } else {
            res
              .status(200)
              .send({ message: " succés", cloudinary_ids, pictures });
          }
        });
      } catch (error) {
        console.error(error);
      }
    };
exports.deleteCarousel=(req,res)=>{
    const id=req.params.id;
    Carousel.findByIdAndDelete(id)
    .then(()=>res.status(200).send({message:"carousel deleted"}))
    .catch(()=>res.status(400).send({message:"error acquired"}))
}
exports.activateDeactivate=(req,res)=>{
    const id=req.params.id;
    const {status}=req.body;
    Carousel.findByIdAndUpdate(id,{isActive:status})
    .then((data)=>res.status(200).send({message:"carousel modified"}))
    .catch(err => res.status(400).send({message:"modification denied"}))
}
exports.activatedCarousels=(req,res)=>{
    Carousel.find({isActive:true})
    .then(data=>res.status(200).send({data}))
    .catch(err=>res.status(400).send({message:"no data returned"}))
}
exports.allCarousels=(req,res)=>{
    Carousel.find()
    .then(data=>res.status(200).send({data}))
    .catch(err=>res.status(400).send({message:"no data returned"}))
}