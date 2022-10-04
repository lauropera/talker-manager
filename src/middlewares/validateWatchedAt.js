function validateAge(req, res, next) {
  const { watchedAt } = req.body.talk;
  const HTTP_BAD_REQUEST_STATUS = 400;
  const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (!isFormatDate.test(watchedAt)) {
    return res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  next();
}

module.exports = validateAge;
