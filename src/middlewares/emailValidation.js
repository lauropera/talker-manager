function emailValidation(req, res, next) {
  const { email } = req.body;

  const validEmail = /\S+@\S+\.\S+/;
  const HTTP_BAD_REQUEST_STATUS = 400;

  if (!email) {
    return res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'O campo "email" é obrigatório' });
  }

  if (!validEmail.test(email)) {
    return res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  return next();
}

module.exports = emailValidation;
