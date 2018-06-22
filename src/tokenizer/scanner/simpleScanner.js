const TOKEN_TYPES = require('../tokens/tokenTypes');

const getToken = item => {
  if (!item) return null;

  return {
    type: TOKEN_TYPES[item],
    value: item,
  };
};

module.exports = getToken;
