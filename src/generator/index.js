const bodyVisitor = require('./visitors/bodyVisitor');

const generator = (ast) => {
  if(!ast) return null;

  return bodyVisitor(ast);
}

module.exports = generator;
