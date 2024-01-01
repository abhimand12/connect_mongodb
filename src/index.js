import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({path: './env'})
import { asyncHandler } from "./utils/asyncHandler.js";

connectDB()     
.then(()=> {
    app.listen(8008|| 8000,()=>{
        console.log(`server is start running on 8008`)
        
    })
})
.catch((err)=>{
    console.log(`database connection error `,err);
})

