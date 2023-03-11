const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const excludedRoutes = ['/login', '/register'];

  if (excludedRoutes.includes(req.path)) {
    return next();
  }
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  const [bearer, token] = authHeader.split(' ');

  if (bearer !== 'Bearer' || !token) {
    return res.status(401).json({ message: 'Invalid token format' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'Token verification failed' });
  }
};

module.exports = authMiddleware;