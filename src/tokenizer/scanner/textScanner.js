const NOT_A_STRING = "Nas"

const textScanner = value => {
  if (!Array.isArray(value)) return null;

  const res = [];
  let templateTextArray = [];

  value.forEach((item, index) => {
    if (!item) return null;

    const { type, value } = item;

    // 如果是已经处理过的token就放入res
    if (type) {
      res.push(item);
      templateTextArray.push(NOT_A_STRING);
    } else {
      res.push(null);
      templateTextArray.push(value);
    }
  });

  const stringArray = templateTextArray.join('').split(NOT_A_STRING);

  return res
    .map(item => {
      if (!item) {
        return {
          type: 'TEXT',
          value: stringArray.shift(),
        };
      }
      return item;
    })
    .filter(item => Boolean(item.value));
};

module.exports = textScanner;
