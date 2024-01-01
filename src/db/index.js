import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB= async () => {

    try 
    {
        const ur1="mongodb+srv://Abhijeet:Mandloi6*@cluster0.1arbe2w.mongodb.net";
        // console.log(`abhijee singh ${DB_NAME}`);
      const connectionInstance=  await mongoose.connect(`${ur1}/${DB_NAME}`)
      console.log(`mongo db connected : ${connectionInstance.connection.host}`)  
    }
    catch(error)
    {
        console.log(`Mongo Db connection error`,error);
        process.exit(1);
    }
}

export default connectDB;