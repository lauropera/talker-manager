const express = require('express');
const generateToken = require('../utils/generateToken');

const router = express.Router();

const emailValidation = require('../middlewares/emailValidation');
const passwordValidation = require('../middlewares/passwordValidation');

const HTTP_OK_STATUS = 200;

router.post('/', emailValidation, passwordValidation, (_req, res) => {
  const token = generateToken();
  res.status(HTTP_OK_STATUS).json({ token });
});

module.exports = router;
