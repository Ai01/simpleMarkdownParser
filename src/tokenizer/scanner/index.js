const simpleScanner = require('./simpleScanner');
const textScanner = require('./textScanner');

const scanner = (mdArray) => {
  if(!mdArray) return null;

  // 将特殊符号替换
  const mdArrayAfterTokenReplace = Array.from(mdArray).map((item) => {
    return simpleScanner(item);
  });

  // 将text替换
  const mdArrayAfterTextReplace = textScanner(mdArrayAfterTokenReplace);

  return mdArrayAfterTextReplace;
};

module.exports = scanner;
