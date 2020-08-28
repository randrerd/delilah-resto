const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  try {

    const { cookies } = req;
    if ('session_id' in cookies) {
   
      const token = cookies.session_id;
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      console.log(decoded);
      let isAdmin = await User.findOne({
        where: { id: decoded.userId, is_admin: 1 },
      });
      if (isAdmin) {
        next();
      } else {
        res.status(403).json({ message: 'Forbidden Access' });
      }
    }
  } catch (error) {
    return res.status(401).json({
      message: 'Auth failed',
      error: error,
    });
  }
};
