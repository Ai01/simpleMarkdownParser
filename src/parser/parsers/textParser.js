const _match = token => {
  if (!Array.isArray(token) || token.length !== 1) {
    return null;
  }

  if (token[0].type === 'TEXT') {
    return token[0].value;
  }

  return null;
};

const textParser = token => {
  const value = _match(token);

  if (!value) return false;

  return {
    type: 'TEXT',
    value,
  };
};

module.exports = {
  parser: textParser,
  minLength: 1,
};
