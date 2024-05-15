import JWT from 'jsonwebtoken';

const userauth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next('Invalid token');
  }
  const token = authHeader.split(' ')[1];
  try {
    const payload = JWT.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };
    next();
  } catch {
    next('Authentication failed');
  }
};
export default userauth;