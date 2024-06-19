import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

// get the currently authenticated user
// first call the protectRoute function, then once it is completed successfully, call getMe
router.get("/me", protectRoute, getMe);
router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;
