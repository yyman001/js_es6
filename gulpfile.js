var gulp        = require('gulp');
// var commonjs    = require('rollup-plugin-commonjs'); //CommonJS 模块转换为 ES6
var nodeResolve = require('rollup-plugin-node-resolve'),
  rollup = require('rollup'),
 // rollupTypescript = require('rollup-plugin-typescript'); //TS
  babel = require('rollup-plugin-babel'),
  json = require('rollup-plugin-json')


const IN_FILE_NAME = 'main.js';
const OUT_FILE_NAME = './dist/library.js';

gulp.task('build', function () {
  return rollup.rollup({
    entry: IN_FILE_NAME,
    plugins: [
     json(),
      nodeResolve(),
      //commonjs(),
      // rollupTypescript(),
      babel({
        exclude: 'node_modules/**'
      })
    ],
  })
    .then(function (bundle) {
      bundle.write({
        format: "umd",
        moduleName: "library",
        dest: OUT_FILE_NAME,
        sourceMap: true
      });
    })
});

//  gulp build 编译