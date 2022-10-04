const express = require('express');

const router = express.Router();
const { readTalkerFile, findPersonById } = require('../utils/fsUtils');

const HTTP_OK_STATUS = 200;
const HTTP_NOT_FOUND_STATUS = 404;

router.get('/', async (_req, res) => {
  const personsList = await readTalkerFile();
  res.status(HTTP_OK_STATUS).json(personsList);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const person = await findPersonById(id);
  if (!person) {
    return res
      .status(HTTP_NOT_FOUND_STATUS)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }
  res.status(HTTP_OK_STATUS).json(person);
});

module.exports = router;
