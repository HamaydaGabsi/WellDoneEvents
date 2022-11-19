const mongoose=require('mongoose');

const connectDB=()=>{
    console.log("connecting to DB...");
    mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true ,useUnifiedTopology: true })
    .then(()=>console.log("DB connected"))
    .catch(err => console.error(err));
}
module.exports=connectDB;