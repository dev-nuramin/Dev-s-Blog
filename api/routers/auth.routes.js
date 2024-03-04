
import express  from "express";
import { createUser, getAllUser } from "../controllers/auth.controller.js";

// create auth router
const router = express.Router();

router.route('/').post(createUser).get(getAllUser)

//export auth router
export default router;