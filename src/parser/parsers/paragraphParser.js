const textParser = require("./textParser");
const boldParser = require("./boldParser");
const emphasisParser = require("./emphasisParser");
const titleOneParser = require("./titleOneParser");
const titleTwoParser = require("./titleTwoParser");
const unorderedListParser = require("./unorderedListParser");

const _match = (tokens) => {
  if (!Array.isArray(tokens)) return [];

  const res = [];
  let lastIndex = 0;
  tokens.forEach((item, index) => {
    if (item && item.type === "UNORDERED_LIST_END_NEW_LINE") {
      res.push({
        type: "PARAGRAPH",
        value: tokens.slice(lastIndex, index + 1),
      });
      lastIndex = index + 2;
    } else if (item && item.type === "NEWLINE") {
      res.push({
        type: "PARAGRAPH",
        value: tokens.slice(lastIndex, index),
      });
      lastIndex = index + 1;
    }
  });

  return res;
};

const formatParagraph = (tokens) => {
  let _value = [];
  const _formatParagraph = (paragraphTokens) => {
    if (!Array.isArray(paragraphTokens) || !paragraphTokens.length) return null;

    let parsers = [
      unorderedListParser,
      titleOneParser,
      boldParser,
      emphasisParser,
      titleTwoParser,
      textParser,
    ];

    // 如果token的长度小于parser要求的最低长度。那么跳过
    parsers = parsers.filter((item) => {
      if (item.minLength > paragraphTokens.length) {
        return false;
      }
      return true;
    });

    parsers.forEach((item) => {
      const { parser: _parser, minLength, endType } = item || {};

      let finalIndex = 0;

      // 有些类型没有固定的最短长度，需要从endType来区分
      if(endType) {
        paragraphTokens.forEach((i, index) => {
          if (i && i.type === endType) {
            finalIndex = index + 1;
          }
        });
      }

      if (finalIndex) {
        const res = _parser(paragraphTokens.slice(0, finalIndex));

        if (res) {
          // 有endType的直接赋值
          _value = res;
          _formatParagraph(paragraphTokens.slice(finalIndex));
        }
        return;
      }
      if (minLength) {
        const res = _parser(paragraphTokens.slice(0, minLength));
        if (res) {
          _value.push(res);
          _formatParagraph(paragraphTokens.slice(minLength));
        }
        return;
      }
    });
  };

  _formatParagraph(tokens);

  return _value;
};

const paragraphParser = (tokens) => {
  // use match to generate get the value for this parser
  const OriginalParagraphs = _match(tokens);

  return OriginalParagraphs.filter((i) => {
    // filter the empty paragraphs
    if (i && i.value && i.value.length) return true;
    return false;
  }).map((item) => {
    const { value, type } = item;

    // transfer the value;
    return {
      type,
      value: formatParagraph(value),
    };
  });
};

module.exports = paragraphParser;
