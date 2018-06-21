const scanner = require('./scanner/index');

const getTokenizer = (mdArray) => {
  const scannerArray = scanner(mdArray);
  return scannerArray;
};

module.exports = getTokenizer;

