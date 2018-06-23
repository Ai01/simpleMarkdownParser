const paragraphParser = require('./paragraphParser');

const bodyParser = tokens => {
  const paragraphs = paragraphParser(tokens);

  return {
    type: 'BODY',
    value: paragraphs,
  };
};

module.exports = bodyParser;
