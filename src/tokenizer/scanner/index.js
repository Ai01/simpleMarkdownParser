const getToken = require('./simpleScanner');

const scanner = (mdArray) => {
  if(!mdArray) return null;

  const mdArrayAfterTokenReplace = Array.from(mdArray).map((item) => {
    return getToken(item);
  });

  return mdArrayAfterTokenReplace;
};

module.exports = scanner;
