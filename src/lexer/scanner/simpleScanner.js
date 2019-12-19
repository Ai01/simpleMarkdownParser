const TOKEN_TYPES = require('../tokens/tokenTypes');

const getToken = value => {
  if (!Array.isArray(value)) return null;

  let templateText = '';

  const res = value.map((item, index) => {
    // if match token
    if (TOKEN_TYPES[item]) return { type: TOKEN_TYPES[item], value: item };

    // if the item and next item both can't match token. it means this item is text
    if (!TOKEN_TYPES[item] && !TOKEN_TYPES[value[index + 1]]) {
      templateText += item;
      return null;
    }

    // if this item isn't token but next is token.
    // need to put the templateText in res and reset templateText
    if (!TOKEN_TYPES[item] && TOKEN_TYPES[value[index + 1]]) {
      const _value = templateText += item;
      templateText = '';
      return { type: 'TEXT', value: _value};
    }
  });

  return res.filter(a => a);
};

module.exports = getToken;
