const simpleScanner = require('./simpleScanner');
const specialSignScanner  = require('./specialSignScanner');
const textScanner = require('./textScanner');

const scanner = (mdArray) => {
  if(!mdArray) return null;

  // 一次循环实现
  return simpleScanner(Array.from(mdArray));

  // 多次循环实现
  // 将特殊符号替换
  // const mdArrayAfterTokenReplace = specialSignScanner(Array.from(mdArray));
  // 将text替换
  // const mdArrayAfterTextReplace = textScanner(mdArrayAfterTokenReplace);
  // return mdArrayAfterTextReplace;
};

module.exports = scanner;
