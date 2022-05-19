import express from "express";
import { 
    getRooms, 
    getRoom,
    postRoom,
    deleteRoom,
    updateRoom 
} from "../controllers/rooms.js";

const router = express.Router();

router.post("/create", postRoom); // add new room
router.post("/delete", deleteRoom); // remove room
router.post("/update", updateRoom); // update room details
router.get("/:id", getRoom); // gets a specific room
router.get("/", getRooms); // gets all rooms

export default router;
