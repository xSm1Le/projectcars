
// Admin Middleware

export const adminMiddleware = async (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: "Admin-Berechtigung erforderlich." });
    }
  };


// The adminMiddleware() checks if the user is an admin and calls next() if true.

