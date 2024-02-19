import express from 'express';
import {
  registerUser,
  loginUser,
  resetPassword,
  getAllUsers,
  changeUserEmail
} from '../controllers/UserController.js';

const router = express.Router();

// Registrierung eines neuen Benutzers
router.post('/register', registerUser);

// Anmeldung eines Benutzers
router.post('/login', loginUser);

// Passwort mit Super Passwort zurücksetzen
router.post('/reset-password', resetPassword);

// Alle Benutzer anzeigen
router.get('/', getAllUsers);

// E-Mail-Adresse eines Benutzers ändern
router.put('/email', changeUserEmail);

export default router;
// Path: backend/src/config/db.js