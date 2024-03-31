import mongoose from "mongoose";
import { DB_NAME } from "./src/constants";
import dotenv from "dotenv"


const connectDBB = async () => {
    try {
        const connectInst = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected bruh! DB host: ${connectInst.connection.host}`)
    } catch (error) {
        console.log("Error: ",error);
        process.exit(1);
    }
 } 

 connectDBB()
 .then(()=>{

 })
 .catch(()=>{
    
 })