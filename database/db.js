import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();



const DBConnection = async()=>{
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

    const MONGODB_URI=`mongodb://${USERNAME}:${PASSWORD}@ac-uzfcvg1-shard-00-00.qqj967k.mongodb.net:27017,ac-uzfcvg1-shard-00-01.qqj967k.mongodb.net:27017,ac-uzfcvg1-shard-00-02.qqj967k.mongodb.net:27017/?ssl=true&replicaSet=atlas-676ojb-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(MONGODB_URI,{useNewUrlParser: true});
        console.log("Successful connection");
    } catch (error) {
        console.error("Error in the connectivity with the mongoDB",error.message);
        
    }
}

export default DBConnection;