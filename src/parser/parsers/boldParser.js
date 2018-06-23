const _match = (tokens) => {
  if(!Array.isArray(tokens) || tokens.length !== 5) return null;

  const StandardSequence = 'UNDERSCORE UNDERSCORE TEXT UNDERSCORE UNDERSCORE';
  const InputSequence = tokens.map((item) => {
    return item.type;
  }).join(' ');

  if(StandardSequence === InputSequence) {
    return tokens[2].value;
  }

  return null;
};

const boldParser = (tokens) => {

  const value = _match(tokens);

  if(!value) return false;

  return {
    type: 'BOLD',
    value
  }
};

module.exports = {
  parser: boldParser,
  minLength: 5
};
