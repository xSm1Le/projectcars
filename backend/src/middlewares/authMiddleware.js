import jwt from 'jsonwebtoken';

// Middleware für die Authentifizierung

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentifizierung fehlgeschlagen." });
  }
};

// Die Middleware authMiddleware() extrahiert das Token aus dem Authorization-Header und überprüft es.
// Wenn das Token gültig ist, wird das decodierte Token-Objekt req.user zugewiesen und next() aufgerufen.
// Andernfalls wird ein 401-Statuscode zurückgegeben.