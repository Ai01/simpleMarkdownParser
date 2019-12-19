/**
 * @description: scanner response for the lexer
 *
 * use lexer to split the string fro tokens
 *
 * @date: 2019/12/18 9:41 下午
 */
const scanner = require('./scanner/index');

const getTokenizer = mdArray => {
  return scanner(mdArray);
};

module.exports = getTokenizer;
