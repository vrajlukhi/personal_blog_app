const mongoose=require("mongoose")
const connect=async()=>{
    await mongoose.connect(process.env.SERVER)
    console.log("Mongoose connected");
}
module.exports=connect