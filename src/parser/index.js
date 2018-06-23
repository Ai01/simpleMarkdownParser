const bodyParser = require('./parsers/bodyParser');

const parser = (tokens) => {
  return bodyParser(tokens);
}

module.exports = parser;
