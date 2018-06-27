const TOKEN_TYPES = require('../tokens/tokenTypes');

const specialScanner = value => {
  if (!Array.isArray(value)) return null;

  return value.map(item => {
    return {
      type: TOKEN_TYPES[item],
      value: item,
    };
  });
};

module.exports = specialScanner;
