const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ServicesSchema=new Schema({
    title:{
        type:String
    },
    image:{
        type:String
    },
    isActive:{
        type:Boolean
    }
})

module.exports=Services=mongoose.model("Services",ServicesSchema);