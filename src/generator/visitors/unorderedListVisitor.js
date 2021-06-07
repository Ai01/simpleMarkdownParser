const strikeVisitor = require("./strikeVisitor");

const typeMap = {
  STRIKE: strikeVisitor,
};

const unorderedListParser = (ast) => {
  if (!ast || ast.type !== "UNORDERED_LIST") return null;

  const { value: _value } = ast;

  const innerHtml = Array.isArray(_value)
    ? _value
        .map((item) => {
          const { type } = item;
          if (typeMap[type] && typeof typeMap[type] === "function")
            return typeMap[type](item);
          return null;
        })
        .join("")
    : "";

  return `<ol>${innerHtml}</ol>`;
};

module.exports = unorderedListParser;
