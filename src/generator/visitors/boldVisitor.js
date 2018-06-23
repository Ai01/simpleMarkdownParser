const boldVisitor = ast => {
  if (!ast || ast.type !== 'BOLD') return null;

  const { value } = ast;
  return `<strong>${value}</strong>`;
};

module.exports = boldVisitor;
