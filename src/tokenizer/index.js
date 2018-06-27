const scanner = require('./scanner/index');

const getTokenizer = (mdArray) => {
  return scanner(mdArray);
};

module.exports = getTokenizer;
