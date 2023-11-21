import express from "express";
import { questionPaper } from "../controllers/questionPaper.js";

const router = express.Router();

router.post("/", questionPaper);

export default router;
