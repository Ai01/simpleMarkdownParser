const TOKEN_TYPES = require('../tokens/tokenTypes');

const getToken  = (item) => {
  if(!item) return null;

  return TOKEN_TYPES[item] || item;
}

module.exports = getToken;
