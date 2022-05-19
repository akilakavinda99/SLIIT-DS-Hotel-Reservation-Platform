import express from "express"
import { postTaxiReserve } from "../controllers/taxi.js";

const router=express.Router();

router.post("/taxi_reserve",postTaxiReserve);

export default router;