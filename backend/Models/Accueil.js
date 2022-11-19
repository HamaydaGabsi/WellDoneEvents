const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const AccueilSchema=new Schema({
    title:{
        type:String
        },
    description:{
        type:String
        },
    image:{
        type:String
    },
    isActive:{
        type:Boolean
    }
})

module.exports=Accueil=mongoose.model("Accueil",AccueilSchema);