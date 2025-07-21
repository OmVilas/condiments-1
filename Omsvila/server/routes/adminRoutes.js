// routes/adminRoutes.js
import express from "express";
import { getAdminStats } from "../controllers/adminController.js";

const router = express.Router();

// 📊 Admin dashboard stats
router.get("/stats", getAdminStats);

export default router;
