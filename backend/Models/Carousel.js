const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CarouselSchema=new Schema({
    image:{
        type:String,
        require:true
    },
    isActive:{
        type:Boolean,
        require:true
    }
})

module.exports=Carousel=mongoose.model("Carousel",CarouselSchema);