import mongoose from "mongoose";

export const Connection = async (username,password)=>{
    
    const URL = `mongodb+srv://${username}:${password}@cluster0.qhyqenh.mongodb.net/FlipkartClone`;
    try {
       await mongoose.connect(URL);
       console.log('database connected sucessfully');
    } catch (error) {
        console.log("Error while connecting with database",error.message);
    }
} 
export default Connection;