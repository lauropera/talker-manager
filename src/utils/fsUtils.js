const fs = require('fs').promises;
const { resolve } = require('path');

const TALKER_FILE_PATH = '../talker.json';

async function readTalkerFile() {
  const path = resolve(__dirname, TALKER_FILE_PATH);
  try {
    const data = await fs.readFile(path);
    const peopleList = JSON.parse(data);
    return peopleList;
  } catch (error) {
    console.error(`Error at reading file: ${error}`);
  }
}

module.exports = { readTalkerFile };
