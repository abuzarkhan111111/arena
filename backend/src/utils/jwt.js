import jwt from 'jsonwebtoken';

export const generateToken = (adminId, role) => {
  return jwt.sign(
    { id: adminId, role: role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE || '7d' }
  );
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};
