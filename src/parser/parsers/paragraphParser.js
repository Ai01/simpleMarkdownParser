const textParser = require('./textParser');
const boldParser = require('./boldParser');
const emphasisParser = require('./emphasisParser');

const _match = tokens => {
  if (!Array.isArray(tokens)) return [];

  const res = [];
  let lastIndex = 0;
  tokens.forEach((item, index) => {
    if (item && item.type === 'NEWLINE') {
      res.push({
        type: 'PARAGRAPH',
        value: tokens.slice(lastIndex, index),
      });
      lastIndex = index + 1;
    }
  });

  return res;
};

const formatParagraph = tokens => {
  const _value = [];
  const _formatParagraph = paragraphTokens => {
    if (!Array.isArray(paragraphTokens) || !paragraphTokens.length) return null;

    let parsers = [boldParser, emphasisParser, textParser];
    const paragraphTokensLength = paragraphTokens.length;

    parsers = parsers.filter(item => {
      if (item.minLength > paragraphTokensLength) {
        return false;
      }
      return true;
    });

    parsers.forEach(item => {
      const { parser: _parser, minLength } = item || {};

      const res = _parser(paragraphTokens.slice(0, minLength));
      if (res) {
        _value.push(res);
        _formatParagraph(paragraphTokens.slice(minLength));
      }
    });
  };

  _formatParagraph(tokens);

  return _value;
};

const paragraphParser = tokens => {
  const OriginalParagraphs = _match(tokens);

  const nextParagraphs = OriginalParagraphs.map(item => {
    const { value, type } = item;

    return {
      type,
      value: formatParagraph(value),
    };
  });

  return nextParagraphs;
};

module.exports = paragraphParser;
