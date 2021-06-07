const emphasisVisitor = ast => {
    if (!ast || ast.type !== 'TITLE_ONE') return null;

    const { value } = ast;
    return `<h1>${value}</h1>`;
};

module.exports = emphasisVisitor;
