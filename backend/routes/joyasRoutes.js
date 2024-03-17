import express from "express";
import { getJoyasFilterController, getJoyasLimitController } from "../src/controllers/joyasControllers.js";

const router = express.Router();

router.get("/joyas", getJoyasLimitController);
router.get("/joyas/filtros", getJoyasFilterController);


export default router;