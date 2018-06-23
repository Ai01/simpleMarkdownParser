const _match = (tokens) => {
  if(!Array.isArray(tokens) || tokens.length !== 3) return null;

  const StandardSequence = 'STAR TEXT STAR';
  const InputSequence = tokens.map((item) => {
    return item.type;
  }).join(' ');

  if(StandardSequence === InputSequence) {
    return tokens[1].value;
  }

  return null;
};

const emphasisParser = (tokens) => {

  const value = _match(tokens);

  if(!value) return false;

  return {
    type: 'EMPHASIS',
    value
  }
};

module.exports = {
  parser: emphasisParser,
  minLength: 3
};
