import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();



const DBConnection = async()=>{
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;
    const mongoDB_URI = process.env.MONGODB_URI;
    const MONGODB_URI=`${mongoDB_URI}`;

    try {
        await mongoose.connect(MONGODB_URI,{useNewUrlParser: true});
        console.log("Successful connection");
    } catch (error) {
        console.error("Error in the connectivity with the mongoDB",error.message);
        
    }
}

export default DBConnection;