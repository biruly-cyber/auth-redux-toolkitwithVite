import express from "express";
import { google, signIn, signUp } from "../controller/user.controller.js";

const router = express.Router();

router.post("/sign-in", signIn);
router.post("/sign-up", signUp);
router.post("/google", google)

export default router;
