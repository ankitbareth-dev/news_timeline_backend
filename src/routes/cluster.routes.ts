import { Router } from "express";
import { getClusters } from "../controllers/cluster.controller.js";

const router = Router();

router.get("/", getClusters);

export default router;
