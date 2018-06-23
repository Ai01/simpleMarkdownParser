const fs = require('fs');
const getMarkdownFileContent = require('../utils/getMarkdown');
const getTokenizer = require('../src/tokenizer/index.js');
const parser = require('../src/parser/index');
const generator = require('../src/generator/index');

const fileContent = getMarkdownFileContent();
const tokenizer = getTokenizer(fileContent);
const ast = parser(tokenizer);

const setMarkdownFileContent = content => {
  return fs.writeFileSync('./public/test.html', content, {
    encoding: 'utf8',
  });
};

setMarkdownFileContent(generator(ast));
