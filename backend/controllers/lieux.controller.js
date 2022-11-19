const Lieux=require('../Models/Lieux');
const storage = require("../helpers/multer");
const multer = require("multer");
const cloudinary=require('../helpers/cloudinary');
const fs = require("fs");

exports.addImages=async (req,res)=>{
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
              const lieux=new Lieux({images:pictures,title:"",isActive:true});
              await lieux.save()
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

exports.addLieux=(req,res)=>{
    const id=req.params.id;
    Lieux.findByIdAndUpdate(id,req.body)
    .then(data => res.status(200).send({message:"lieux added",data}))
    .catch(err => res.status(400).send({message:"error acquired"}));
}
exports.deleteLieux=(req,res)=>{
    const id=req.params.id;
    Lieux.findByIdAndDelete(id)
    .then(data => res.status(200).send({message:"lieux deleted",data}))
    .catch(err => res.status(400).send({message:"error acquired"}));
}
exports.deleteImage= async (req,res)=>{
    try{
       const id=req.params.id;
       const { imageurl }=req.body;
       const result=await Lieux.findById(id);
       const pictures=await result.images.filter(pic => pic!==imageurl)

       Lieux.findByIdAndUpdate(id,{images:pictures})
       .then(data => res.status(200).send({message:"image deleted",data}))
       .catch(err =>res.status(400).send({message:"error in deleting image (1)"}) )
    }
    catch(err){
        res.status(400).send({message:"error in deleting image (2)"})
    }
}

exports.addImagesToPost=async (req,res)=>{
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
                const id=req.params.id;
                const lieu=await Lieux.findById(id);
                const pic=await lieu.images.concat(pictures);

                Lieux.findByIdAndUpdate(id,{images:pic})
                .then(data => res.status(200).send({message:"image(s) added",data}))
                .catch(err =>res.status(400).send({message:"error in adding image(s)"}) )
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

exports.getActivatedPosts=(req,res)=>{
    Lieux.find({isActive:true},{title:1})
    .then(data => res.status(200).send({message:"active lieux",data}))
    .catch(err =>res.status(400).send({message:"error acquired"}))
}
exports.getAllPosts=(req,res)=>{
    Lieux.find({},{title:1})
    .then(data => res.status(200).send({message:"active lieux",data}))
    .catch(err =>res.status(400).send({message:"error acquired"}))
}

exports.getImagesOfActiveLieu=(req,res)=>{
    const id=req.params.id;
    Lieux.findById(id,{images:1})
    .then(data => res.status(200).send({message:"images of active lieu",data}))
    .catch(err =>res.status(400).send({message:"error acquired"}))
}