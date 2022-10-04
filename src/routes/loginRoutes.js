const express = require('express');
const generateToken = require('../utils/generateToken');

const router = express.Router();

const HTTP_OK_STATUS = 200;

router.post('/', (_req, res) => {
  const token = generateToken();
  res.status(HTTP_OK_STATUS).json({ token });
});

module.exports = router;
