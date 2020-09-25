const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Sequelize } = require('sequelize');

module.exports.users_register = async (req, res) => {
  try {
    const data = req.body;
    let {
      username,
      firstname,
      lastname,
      email,
      phone,
      address,
      password,
      is_admin,
    } = data;
    const usernameAlreadyRegistered = await User.findAll({
      where: { username },
    });
    const emailAlreadyRegistered = await User.findAll({ where: { email } });

    if (usernameAlreadyRegistered.length) {
      res
        .status(409)
        .json({ message: `Username taken, try with a different one!` });
    } else if (emailAlreadyRegistered.length) {
      res.status(409).json({
        message: `Email already registered, try with a different one!`,
      });
    } else {
      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err,
          });
        } else {
          //Tries to create new user and throws any validation error
          try {
            const newUser = await User.create({
              username,
              firstname,
              lastname,
              email,
              phone,
              address,
              password: hash,
              is_admin,
            });
            res.status(200).json({ message: 'User created succesfully!' });
          } catch (err) {
            let errorsThrown = [];
            err.errors.forEach((errorItem) => {
              let errorToShow = {
                msg: errorItem.message,
                type: errorItem.type,
              };
              errorsThrown.push(errorToShow);
            });
            res.status(400).json({ errorsThrown });
          }

          // .then(() => {
          //   res.status(200).json({ message: 'User created succesfully!' });
          // })
          // .catch((err) => {

          // });
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

module.exports.users_login = async (req, res) => {
  const data = req.body;
  let { username, password } = data;
  try {
    const userLogin = await User.findOne({ where: { username } });

    if (!userLogin) {
      res.status(401).json({
        message: 'Auth failed, please check your username and/or password',
      });
    } else {
      bcrypt.compare(password, userLogin.password, (err, result) => {
        console.log(result);
        if (!result) {
          return res.status(401).json({ message: 'Auth failed' });
        } else {
          const token = jwt.sign(
            {
              username: userLogin.username,
              userId: userLogin.id,
            },
            process.env.JWT_KEY,
            { expiresIn: '1h' }
          );

          res.cookie('session_id', token);
          return res.status(200).json({
            message: 'Auth succesful!',
          });
        }
      });
    }
  } catch (err) {
    res.status(401).json({
      message: 'Auth failed',
    });
  }
};

module.exports.users_delete = async (req, res) => {
  const data = req.params;
  try {
    const removedUser = await User.destroy({ where: { id: data.userId } });
    if (!removedUser) {
      return res.status(404).json({ message: 'User not found!' });
    } else {
      res.status(200).json({ message: 'User removed!' });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports.users_get_user = async (req, res) => {
  let data = req.params;
  try {
    const user = await User.findOne({
      where: { id: data.userId },
      attributes: [
        'username',
        'firstname',
        'lastname',
        'email',
        'phone',
        'address',
      ],
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    } else res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports.users_get_all = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
