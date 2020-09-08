const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  try {
    const { cookies } = req;
    const userIdToAccess = req.params.userId;

    if ('session_id' in cookies) {
      const token = cookies.session_id;
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      let isPermitted;
      //Checks if the request is trying to access user details
      if (userIdToAccess) {
        isPermitted = userIdToAccess == decoded.userId;
      } else isPermitted = true;

      let isAdmin = await User.findOne({
        where: { id: decoded.userId, is_admin: 1 },
      });

      if (!isPermitted) {
        if (!isAdmin) {
          return res.status(403).json({ message: 'Access Forbidden' });
        } else next();
      } else next();
    } else return res.status(401).json({ message: 'You need to log in first' });
  } catch (error) {
    return res.status(401).json({
      message: 'Auth failed',
      error: error,
    });
  }
};
