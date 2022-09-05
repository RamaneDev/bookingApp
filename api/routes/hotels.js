import express from 'express';
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from '../controllers/hotel.js';
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
router.get('/find/:id', getHotel)

// GET ALL
router.get('/', getHotels)

// GET HOTELS BY CITIES
router.get('/countByCity', countByCity)

// GET HOTELS BY TYPES
router.get('/countByType', countByType)

// GET rooms for SPECIFIC HOTEL
router.get('/room/:id', getHotelRooms)


export default router