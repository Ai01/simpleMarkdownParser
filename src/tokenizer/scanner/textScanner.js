const NOT_A_STRING = 'NAS';

const textScanner = value => {
  if (!Array.isArray(value)) return null;

  let res = [];
  let templateTextArray = [];

  // 将res中text部分变为null
  value.forEach(item => {
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


  // 将res中多余的null去除
  res = res.filter((item, index) => {
    if (item) {
      return item;
    }
    if (!item && !res[index - 1]) {
      return false;
    }

    return true;
  });

  // 将char变为单词组合存储起来
  const stringArray = templateTextArray
    .join('')
    .split(NOT_A_STRING)
    .filter(item => item);

  // 将res中为text留的null换为对应的text
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
