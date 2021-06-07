# MarkdownParser

transfer markdown to html

## feature list

- finished:

    - \_\_text\_\_
    - \*text\*
    - \#
    - \#\#
    - \- 无序列表

- unFinished:

    - \``` 代码片段
    - 有序列表
    - \` 行内代码片段

## test

```
npm run test_generator 测试code生成
npm run test_parser 测试语法分析
npm run test_tokenizer 测试词法分析
npm run write_html 将markdown中的内容写入到html文件中，用浏览器打开public/test.html就可以看见结果
```

## 细节问题

- 语法分析从上至下和从下至上的不同？
  - 从上至下分析，是指从上到下的去匹配对应token规则下的语法模式
  - 对于无限递归的文法，从上到下无法处理
- 节点类型的parser依然有跨段落的可能？这个问题如何统一解决
  - 在组合型parser的初次处理下，类似`-`这样的无序列表如何处理？
    - 先处理一遍token list，去除不必要的换行符
    - 对无序列表这样没有固定长度的类型，需有一个endType。这个也需要在token中处理，找到这种类型结束的时候，添加一个对应的end token

## 宏观问题

1. 注意到一个普通编译要走哪些步骤(词法分析，语法分析，结果生成)
2. 为什么要走这些步骤
3. 这些步骤究竟在干什么。(对细节不需要过分纠结，总是会忘了。但是这个步骤在干什么不可以忘记)

## 参考资料

1. https://blog.beezwax.net/2017/08/10/writing-a-markdown-compiler-part-2/
2. https://juejin.im/post/5c7c7658f265da2db912888c
3. https://github.com/ascoders/syntax-parser
4. doc目录下的文章
