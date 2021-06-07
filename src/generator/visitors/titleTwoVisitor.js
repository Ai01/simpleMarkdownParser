const emphasisVisitor = ast => {
    if (!ast || ast.type !== 'TITLE_TWO') return null;

    const { value } = ast;
    return `<h2>${value}</h2>`;
};

module.exports = emphasisVisitor;
