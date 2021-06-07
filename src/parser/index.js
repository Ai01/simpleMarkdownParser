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

// 对parser而言有两种分别。组合型parser，节点型parser
// 比如说body parser。就是一种组合型parser。它寻找newline token来将token list划分为一个一个组合。
// 节点型parser某种程度上也是一种token 组合。但是不同之处在于，节点型parser有一个token组合的规矩。
// 比如bold parser就规定了UNDERSCORE UNDERSCORE TEXT UNDERSCORE UNDERSCORE这个规定, 满足这个规定才是bold parser
// 从上到下的parser就是先分割出组合parser。然后在组合parser中分割出节点parser
const bodyParser = require('./parsers/bodyParser');

const parser = tokens => {
  return bodyParser(tokens);
};

module.exports = parser;
