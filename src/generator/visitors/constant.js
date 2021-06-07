const paragraphVisitor = require("./paragraphVisitor");
const textVisitor = require("./textVisitor");
const boldVisitor = require("./boldVisitor");
const emphasisVisitor = require("./emphasisVisitor");
const titleOneVisitor = require("./titleOneVisitor");
const titleTwoVisitor = require("./titleTwoVisitor");

const typeMap = {
  PARAGRAPH: paragraphVisitor,
  TEXT: textVisitor,
  BOLD: boldVisitor,
  EMPHASIS: emphasisVisitor,
  TITLE_ONE: titleOneVisitor,
  TITLE_TWO: titleTwoVisitor
};

module.exports = typeMap;
