const textVisitor = ast => {
    if (!ast || ast.type !== 'STRIKE') return null;

    const { value } = ast;
    return `<li>${value}</li>`;
};

module.exports = textVisitor;
