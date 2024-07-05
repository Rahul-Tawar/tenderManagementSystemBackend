import jwt from 'jsonwebtoken';
import config from '../config/config.js';

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  console.log(headers);
  if (!token) {
    return res.status(403).send({ message: 'No token provided!' });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized!' });
    }
    req.userId = decoded.id;
    next();
  });
};

export default verifyToken;
