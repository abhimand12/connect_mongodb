import { asyncHandler } from "../utils/asyncHandler.js";
// import {ApiError} from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
// import { ApiResponse}  from "../utils/ApiResponse.js";

// const twitter =asyncHandler( async (req,res)=>{
//     console.log("singh")
//     // return res.status(201).json(
//     //     new ApiResponse(200,  "User registered Successfully")
//     // )
//     res.send("a adjff")

// });

const registerUser= asyncHandler( async (req,res)=>{
    res.status(200).json({message:"Ok"})
})

export {registerUser};