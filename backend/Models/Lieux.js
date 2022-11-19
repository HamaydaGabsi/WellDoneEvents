const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const LieuxSchema=new Schema({
    title:{
        type:String
    },
    images:{
        type:Array
    },
    isActive:{
        type:Boolean
    }
})

module.exports=Lieux=mongoose.model("Lieux",LieuxSchema);