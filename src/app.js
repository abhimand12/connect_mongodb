import express from "express"

// import { asyncHandler } from "../utils/asyncHandler.js";
import { asyncHandler } from "./utils/asyncHandler.js";
const app=express()


// i am doing configuration setting
app.use( express.json())   // it says i am accepting json from request 
app.use(express.urlencoded() )  // it is saying for how use accept data from url


import userRouter from './routes/user.routes.js'
app.use("/api/v1/users",userRouter);






// routes declaration
// now we are using  middle ware  as in form of app.use( )  




// http://localhost:8000/api/v1/users/register   

export{app}