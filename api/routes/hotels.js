import express from 'express';
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js';
import { verifyToken } from '../utils/verifyToken.js';
import { verifyAdmin } from '../utils/verifyUser.js';



const router = express.Router();

// CREATE
router.post('/',verifyToken, verifyAdmin, createHotel);

// DELETE
router.delete('/:id', verifyToken, verifyAdmin, deleteHotel);

// UPDATE
router.put('/:id', verifyToken, verifyAdmin, updateHotel)

// GET
router.get('/:id', getHotel)

// GET ALL
router.get('/', getHotels)

export default router