import express from 'express';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from '../controllers/room.js';
import { verifyToken } from '../utils/verifyToken.js';
import { verifyAdmin } from '../utils/verifyUser.js';


const router = express.Router();

// CREATE
router.post('/:hotelid',verifyToken, verifyAdmin, createRoom);

// DELETE
router.delete('/:id/:hotelid', verifyToken, verifyAdmin, deleteRoom);

// UPDATE
router.put('/:id', verifyToken, verifyAdmin, updateRoom)

// GET
router.get('/:id', getRoom)

// GET ALL
router.get('/', getRooms)

export default router