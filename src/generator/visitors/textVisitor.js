const textVisitor = ast => {
  if (!ast || ast.type !== 'TEXT') return null;

  const { value } = ast;
  return `<span>${value}</span>`;
};

module.exports = textVisitor;
