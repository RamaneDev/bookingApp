import express from 'express';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';
import { verifyToken } from '../utils/verifyToken.js';


const router = express.Router();

router.get('/checkauthentication', verifyToken, (req, res, next) => {
     console.log(req.user);
     res.send('hello user, your are logged in!');
});

// CREATE
router.post('/', createUser);

// DELETE
router.delete('/:id', deleteUser);

// UPDATE
router.put('/:id', updateUser)

// GET
router.get('/:id', getUser)

// GET ALL
router.get('/', getUsers)

export default router