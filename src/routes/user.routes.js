import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
 import { registerUser } from "../controllers/user.controller.js";
//  import { twitter } from "../controllers/user.controller.js";
const router= Router();

// router.route("/register").post(registerUser)
router.route("/register").post(registerUser)



export default router;
