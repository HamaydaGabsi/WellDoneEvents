const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const SocialSchema=new Schema({
    tel:{
        type:String
    },
    email:{
        type:String
    },
    adress:{
        type:String
    },
    facebook:{
        type:String
    },
    youtube:{
        type:String
    },
    instagram:{
        type:String
    },
    twitter:{
        type:String
    },
    whatsapp:{
        type:String
    },
    pinterest:{
        type:String
    },

})

module.exports=Social=mongoose.model("Social",SocialSchema);