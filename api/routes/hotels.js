import express from 'express';
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js';
import Hotel from '../models/Hotel.js'


const router = express.Router();

// CREATE
router.post('/', createHotel);

// DELETE
router.delete('/:id', deleteHotel);

// UPDATE
router.put('/:id', updateHotel)

// GET
router.get('/:id', getHotel)

// GET ALL
router.get('/', getHotels)

export default router