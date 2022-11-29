const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ContactSchema=new Schema({
    nom:{
        type:String
    },
    prenom:{
        type:String
    },
    email:{
        type:String
    },
    telephone:{
        type:String
    },
    adress:{
        type:String
    },
    event:{
        type:String
    },
    date:{
        type:String
    },
    message:{
        type:String
    }
})

module.exports=Contact=mongoose.model("Contact",ContactSchema);