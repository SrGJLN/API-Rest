import express from "express";
import { getJoyasLimitController } from "../src/controllers/joyasControllers.js";

const router = express.Router();

router.get("/joyas", getJoyasLimitController);


export default router;