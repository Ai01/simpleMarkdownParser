# SimpleMarkdownParser

> 将markdown转换为html的编译器

## 参考资料

1. https://blog.beezwax.net/2017/08/10/writing-a-markdown-compiler-part-2/

## test

```
npm run test_generator 测试code生成
npm run test_parser 测试语法分析
npm run test_tokenizer 测试词法分析
npm run write_html 将markdown中的内容写入到html文件中，用浏览器打开public/test.html就可以看见结果
```

## 关键的问题，也是需要从这个代码中学到的东西

1. 注意到一个普通编译要走哪些步骤(词法分析，语法分析，结果生成)
2. 为什么要走这些步骤
3. 这些步骤究竟在干什么。(对细节不需要过分纠结，总是会忘了。但是这个步骤在干什么不可以忘记)
