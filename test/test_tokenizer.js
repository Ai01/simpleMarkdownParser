const getMarkdownFileContent = require('../utils/getMarkdown');
const getTokenizer = require('../tokenizer/index');

const fileContent = getMarkdownFileContent();
const tokenizer = getTokenizer(fileContent);

console.log('markdown file content', fileContent);
console.log('tokenizer', tokenizer);
