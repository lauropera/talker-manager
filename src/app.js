const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const talkerRoutes = require('./routes/talkerRoutes');

const HTTP_OK_STATUS = 200;

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', talkerRoutes);

module.exports = app;
