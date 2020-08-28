const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  try {
    const { cookies } = req;
    const userIdToAccess = req.params.userId;

    if ('session_id' in cookies) {
      const token = cookies.session_id;
      const decoded = jwt.verify(token, process.env.JWT_KEY);

      let isPermitted = userIdToAccess == decoded.userId;
      let isAdmin = await User.findOne({
        where: { id: decoded.userId, is_admin: 1 },
      });

      if (!isPermitted) {
        if (!isAdmin) {
          return res.status(403).json({ message: 'Access Forbidden' });
        } else next();
      } else next();
    }
  } catch (error) {
    return res.status(401).json({
      message: 'Auth failed',
      error: error,
    });
  }
};
