import express from 'express';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';
import { verifyToken } from '../utils/verifyToken.js';
import { verifyAdmin, verifyUser } from '../utils/verifyUser.js';


const router = express.Router();

// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//      res.send('hello user, your are logged in!');
// });


// router.get('/checkuser/:id', verifyToken, verifyUser, (req, res, next) => {
//      res.send('hello user, your are logged in and you can delete your account!');
// });

// router.get('/checkadmin/:id', verifyToken, verifyAdmin, (req, res, next) => {
//      res.send('hello admin, your are logged in and you can delete all accounts!');
// });

// CREATE
router.post('/', verifyToken, verifyAdmin, createUser);

// DELETE
router.delete('/:id',verifyToken, verifyUser, deleteUser);

// UPDATE
router.put('/:id',verifyToken, verifyUser, updateUser)

// GET
router.get('/:id', verifyToken, verifyUser, getUser)

// GET ALL
router.get('/', verifyToken, verifyAdmin, getUsers)

export default router