import express from "express";

import {
  getOrders,
  getOrderById,
  searchOrders,
} from "../controllers/orderController.js";

const router = express.Router();

router.get("/", getOrders);

router.get("/search", searchOrders);

router.get("/:id", getOrderById);

export default router;
