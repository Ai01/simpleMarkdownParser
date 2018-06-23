const paragraphVisitor = require('./paragraphVisitor');
const textVisitor = require('./textVisitor');
const boldVisitor = require('./boldVisitor');
const emphasisVisitor = require('./emphasisVisitor');

const typeMap = {
  PARAGRAPH: paragraphVisitor,
  TEXT: textVisitor,
  BOLD: boldVisitor,
  EMPHASIS: emphasisVisitor,
};

module.exports = typeMap;
