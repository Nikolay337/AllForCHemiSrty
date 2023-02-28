const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const excludedRoutes = ['/login', '/register'];

  if (excludedRoutes.includes(req.path)) {
    return next();
  }

  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
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