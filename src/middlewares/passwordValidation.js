function passwordValidation(req, res, next) {
  const { password } = req.body;

  const HTTP_BAD_REQUEST_STATUS = 400;
  const MIN_PASSWORD_LENGTH = 6;

  if (!password) {
    return res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'O campo "password" é obrigatório' });
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    return res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }

  return next();
}

module.exports = passwordValidation;
