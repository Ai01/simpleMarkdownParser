const emphasisVisitor = ast => {
  if (!ast || ast.type !== 'EMPHASIS') return null;

  const { value } = ast;
  return `<em>${value}</em>`;
};

module.exports = emphasisVisitor;
