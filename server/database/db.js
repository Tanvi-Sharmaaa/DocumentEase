import mongoose from "mongoose";
import 'dotenv/config.js'

const Connection = async() => {
  
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}`);
        console.log('Database connected');
    } catch(error){
        console.log('Error while connecting with the database' , error);
    }
}

export default Connection;