/**
 * @description:  parser
 *
 * use parser to transfer tokens(create from lexer) to ast
 *
 *
 * parser progress start from bodyParser.
 * bodyParser create the ast like: [{ type: paragraph, value: [...] }]
 * in the value of paragraph is tokens generate from lexer
 *
 * then in paragraph. paragraph need to transfer the values in paragraph
 *
 * in the leaf parsers, like bold parser.they have two property.
 * first is miniLength and second is their self parser.
 * for bold parser. the mini bold is **s**. so the mini length is 5.
 * if the value length lower than mini with. this parser will be omitted
 *
 * the leaf parser function. will match the token type structure. when the
 * answer is right, parser will be executed.
 *
 * @date: 2019/12/18 9:49 下午
 */
const bodyParser = require('./parsers/bodyParser');

const parser = tokens => {
  return bodyParser(tokens);
};

module.exports = parser;
