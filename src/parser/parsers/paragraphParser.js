const textParser = require('./textParser');
const boldParser = require('./boldParser');
const emphasisParser = require('./emphasisParser');
const titleOneParser = require('./titleOneParser');
const titleTwoParser = require('./titleTwoParser');
const strikeParser = require('./strikeParser');

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

    let parsers = [strikeParser, titleOneParser, boldParser, emphasisParser, titleTwoParser, textParser];

    // 如果token的长度小于parser要求的最低长度。那么跳过
    parsers = parsers.filter(item => {
      if (item.minLength > paragraphTokens.length) {
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
  // use match to generate get the value for this parser
  const OriginalParagraphs = _match(tokens);

  return OriginalParagraphs.filter(i => {
    // filter the empty paragraphs
    if (i && i.value && i.value.length) return true;
    return false;
  }).map(item => {
    const { value, type } = item;

    // transfer the value;
    return {
      type,
      value: formatParagraph(value),
    };
  });
};

module.exports = paragraphParser;
