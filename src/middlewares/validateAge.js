function validateAge(req, res, next) {
  const { age } = req.body;
  const HTTP_BAD_REQUEST_STATUS = 400;

  if (!age) {
    return res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'O campo "age" é obrigatório' });
  }
  if (!Number.isInteger(age) || age < 18) {
    return res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }

  next();
}

module.exports = validateAge;
