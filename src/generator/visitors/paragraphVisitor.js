const textVisitor = require('./textVisitor');
const boldVisitor = require('./boldVisitor');
const emphasisVisitor = require('./emphasisVisitor');

const typeMap = {
  TEXT: textVisitor,
  BOLD: boldVisitor,
  EMPHASIS: emphasisVisitor,
};


const paragraphVisitor = ast => {
  if (!ast || ast.type !== 'PARAGRAPH') return null;

  const { value: _value } = ast;

  const innerHtml = Array.isArray(_value)
    ? _value.map(item => {
        const { type } = item;
        if (typeMap[type] && typeof typeMap[type] === 'function') return typeMap[type](item);
        return null;
      }).join('')
    : '';

  return `<p>${innerHtml}</p>`;
};

module.exports = paragraphVisitor;
