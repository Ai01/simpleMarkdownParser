const myConsole = require('../utils/myConsole');
const getMarkdownFileContent = require('../utils/getMarkdown');
const getTokenizer = require('../src/lexer/index.js');
const parser = require('../src/parser/index');
const generator = require('../src/generator/index');

const fileContent = getMarkdownFileContent();
const tokenizer = getTokenizer(fileContent);
const ast = parser(tokenizer);

console.log('code:');
myConsole(generator(ast));
console.log('------------------------');

