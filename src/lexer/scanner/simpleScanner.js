const TOKEN_TYPES = require('../tokens/tokenTypes');

// 在一次循环中，遍历出所有的token
const getToken = value => {
  if (!Array.isArray(value)) return null;

  // 用来记录文字
  let templateText = '';

  const res = value.map((item, index) => {
    //  如果命中了token类型
    if (TOKEN_TYPES[item]) return { type: TOKEN_TYPES[item], value: item };

    // 如果连续都不命中token，那么是文字
    if (!TOKEN_TYPES[item] && !TOKEN_TYPES[value[index + 1]]) {
      templateText += item;
      return null;
    }

    // 如果当前非token，下一个值是token。那么文字类型结束
    if (!TOKEN_TYPES[item] && TOKEN_TYPES[value[index + 1]]) {
      const _value = templateText += item;
      templateText = '';
      return { type: 'TEXT', value: _value};
    }
  });

  return res.filter(a => a);
};

module.exports = getToken;
