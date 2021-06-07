const simpleScanner = require("./simpleScanner");
const specialSignScanner = require("./specialSignScanner");
const textScanner = require("./textScanner");

const scanner = (mdArray) => {
  if (!mdArray) return null;

  // 一次循环实现获取所有的token
  let originalTokenList = simpleScanner(Array.from(mdArray));

  // 对循环得到的token列表做一次删除处理
  originalTokenList = originalTokenList.map((i, index) => {
    const lastItem = originalTokenList[index - 1];
    const nextItem = originalTokenList[index + 1];
    if (!i || !lastItem || !nextItem) return i;

    const { type } = i;
    const { type: lastType } = lastItem;
    const { type: nextType } = nextItem;

    // 1. 将NEWLINE, NEWLINE的第一个NEWLINE置为null
    if (type === "NEWLINE" && nextType === "NEWLINE") return null;

    // 2. 将TEXT, NEWLINE, STRIKE中的NEWLINE置为null
    if (lastType === "TEXT" && type === "NEWLINE" && nextType === "STRIKE") {
      return null;
    }

    return i;
  }).filter(i => i);

  // 对删除处理得到的token列表做一次改写处理
  originalTokenList = originalTokenList.map((i, index) => {
    const lastItem = originalTokenList[index - 1];
    const nextItem = originalTokenList[index + 1];
    if (!i || !lastItem || !nextItem) return i;

    const { type } = i;
    const { type: lastType } = lastItem;
    const { type: nextType } = nextItem;

    // 3. 将STRIKE, TEXT, NEWLINE中的NEWLINE置为UNORDERED_LIST_END_NEW_LINE
    if (lastType === "STRIKE" && type === "TEXT" && nextType === "NEWLINE") {
      originalTokenList[index + 1] = {
        type: "UNORDERED_LIST_END_NEW_LINE",
      };
      return i;
    }

    return i;
  });

  return originalTokenList;

  // 多次循环实现
  // 将特殊符号替换
  // const mdArrayAfterTokenReplace = specialSignScanner(Array.from(mdArray));
  // 将text替换
  // const mdArrayAfterTextReplace = textScanner(mdArrayAfterTokenReplace);
  // return mdArrayAfterTextReplace;
};

module.exports = scanner;
