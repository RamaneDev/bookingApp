import express from 'express';
import { countByCity, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js';
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

// GET ALL
router.get('/countByCity', countByCity)


export default router