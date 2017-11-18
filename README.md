# js es6 编译 es5 环境

### 相关参考资料
 - [教程：如何通过 Rollup 来打包 JavaScript](https://juejin.im/entry/57edcefda22b9d005bb0d62c)
 - [rollup.js 教程](http://www.jianshu.com/c/2ed8367437ce)
 - [如何使用Rollup打包JavaScript](https://www.w3cplus.com/javascript/learn-rollup-js.html)
 - [Rollup 试炼之路](https://segmentfault.com/a/1190000004331382)

### 2种ES6 => ES5 的编译环境
- gulp方式
- rollup 自带编译方式

### 安装依赖
`main.js` 为入口文件，出口文件参考下面说明
```cmd
npm i
npm 编译 => 参考rollup.config.js
// => npm run build 编译
// => npm run watch 监听文件变化编译
编译输出文件 => dist/rollup_out_es5.js

//------
//gulp 编译
//gulp watch => 参考gulpfile.js
编译输出文件 => dist/gulp_out_es5.js
```

