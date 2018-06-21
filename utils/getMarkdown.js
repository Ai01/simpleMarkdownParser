const fs = require('fs');

const getMarkdownFileContent = () => {
  return fs.readFileSync('./public/test.md', {
    encoding: 'utf8',
  });
};

module.exports = getMarkdownFileContent;
