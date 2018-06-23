const typeMap = require('./constant');

const bodyVisitor = value => {
  if (!value || value.type !== 'BODY') return null;

  const { value: _value } = value;

  const innerHtml = Array.isArray(_value)
    ? _value.map(item => {
        const { type } = item;
        if (typeMap[type] && typeof typeMap[type] === 'function') return typeMap[type](item);
        return null;
      }).join('')
    : '';

  return ` <body>${innerHtml}</body>`;
};

module.exports = bodyVisitor;
