function validateName(req, res, next) {
  const { name } = req.body;
  const HTTP_BAD_REQUEST_STATUS = 400;
  const MIN_NAME_LENGTH = 3;

  if (!name) {
    return res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < MIN_NAME_LENGTH) {
    return res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  next();
}

module.exports = validateName;
