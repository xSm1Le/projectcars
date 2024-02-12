import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Register

export const registerUser = async (req, res) => {
  const { username, password, isAdmin } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).send('Benutzer existiert bereits.');

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({ username, password: hashedPassword, isAdmin });

    const token = jwt.sign({ username: result.username, id: result._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Etwas ist schief gelaufen." });
  }
};

// Login

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (!existingUser) return res.status(404).send('Benutzer nicht gefunden.');

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) return res.status(400).send('Ungültiges Passwort.');

    const token = jwt.sign({ username: existingUser.username, id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Etwas ist schief gelaufen." });
  }
};
