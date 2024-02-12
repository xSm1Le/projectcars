import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.js';


const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.delete('/:id', deleteUser); // only for admin
router.get('/', getAllUsers); // only for admin

export default router;
