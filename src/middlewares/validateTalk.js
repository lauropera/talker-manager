function validateTalk(talkValue, res, value) {
  const HTTP_BAD_REQUEST_STATUS = 400;
  if (!talkValue) {
    return res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: `O campo "${value}" é obrigatório` });
  }
}

module.exports = (req, res, next) => {
  const { talk } = req.body;

  return (
    validateTalk(talk, res, 'talk')
    || validateTalk(talk.watchedAt, res, 'watchedAt')
    || validateTalk(talk.rate, res, 'rate')
    || next()
  );
};
