const express = require('express');
const generateToken = require('../utils/generateToken');

const router = express.Router();

const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');

const HTTP_OK_STATUS = 200;

router.post('/', validateEmail, validatePassword, (_req, res) => {
  const token = generateToken();
  res.status(HTTP_OK_STATUS).json({ token });
});

module.exports = router;
