const mongoose=require('mongoose');
const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://amanjain4691:aman@cluster1.a2krxq8.mongodb.net/coderwing");
        console.log("MongoDB connected");
        
    } catch (error) {
        console.log(error);
        
    }
}
module.exports=connectDB;