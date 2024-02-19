import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.js';


const router = express.Router();


router.post('/register', registerUser);  // register a new user
router.post('/login', loginUser);      // login a user
router.delete('/:id', deleteUser); // delete a user by id only for admin
router.get('/', getAllUsers); // get all users only for admin

export default router;

