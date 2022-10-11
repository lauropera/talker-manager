function validateRate(req, res, next) {
  const { rate } = req.body.talk;
  const HTTP_BAD_REQUEST_STATUS = 400;

  if (!Number.isInteger(rate) || rate < 1 || rate > 5) {
    return res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  next();
}

module.exports = validateRate;
