const { verifyToken } = require("../pkg/jwt");

function authMiddleware(req, res, next) {
  const token = req.cookies.token;  
  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: "Invalid or expired token" });
  }
}

module.exports = authMiddleware;
