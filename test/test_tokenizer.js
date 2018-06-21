const getMarkdownFileContent = require('../utils/getMarkdown');
const getTokenizer = require('../src/tokenizer/index.js');

const fileContent = getMarkdownFileContent();
const tokenizer = getTokenizer(fileContent);

console.log('markdown file content:', fileContent);
console.log('--------------------------------');
console.log('tokenizer:', tokenizer);
