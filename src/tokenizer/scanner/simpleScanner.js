const TOKEN_TYPES = require('../tokens/tokenTypes');

const getToken = value => {
  if (!Array.isArray(value)) return null;

  let templateText = '';

  const res = value.map((item, index) => {
    if (TOKEN_TYPES[item]) return { type: TOKEN_TYPES[item], value: item };

    if (!TOKEN_TYPES[item] && !TOKEN_TYPES[value[index + 1]]) {
      templateText += item;
      return null;
    }

    if (!TOKEN_TYPES[item] && TOKEN_TYPES[value[index + 1]]) {
      const _value = templateText += item;
      templateText = '';
      return { type: 'TEXT', value: _value};
    }
  });

  return res.filter(a => a);
};

module.exports = getToken;
