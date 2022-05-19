import express from "express";
import {
  getBooking,
  getAllBookings,
  postBooking,
  getAllAvailable,
  deleteBooking,
} from "../controllers/bookings.js";

const router = express.Router();

router.get("/", getAllBookings);
router.post("/get", getBooking);
router.post("/delete", deleteBooking);
router.post("/create", postBooking);
router.post("/available", getAllAvailable);

export default router;
