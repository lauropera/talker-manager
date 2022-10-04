const fs = require('fs').promises;
const { resolve } = require('path');

const TALKER_FILE_PATH = '../talker.json';

async function readTalkerFile() {
  const path = resolve(__dirname, TALKER_FILE_PATH);
  try {
    const data = await fs.readFile(path);
    const personsList = JSON.parse(data);
    return personsList;
  } catch (error) {
    console.error(`Error at reading file: ${error}`);
  }
}

async function findPersonById(personId) {
  const personsList = await readTalkerFile();
  const person = personsList.find(({ id }) => id === Number(personId));
  return person;
}

module.exports = { readTalkerFile, findPersonById };
