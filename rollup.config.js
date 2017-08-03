// rollup.config.js
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import rollupTypescript from 'rollup-plugin-typescript';

const IN_FILE_NAME = 'main.js';
const OUT_FILE_NAME = 'bundle.js';

export default {
  entry: IN_FILE_NAME,
  format: 'umd',
  moduleName: "library",
  plugins: [ 
    json(),
    // rollupTypescript(),
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  dest: OUT_FILE_NAME
};


// => npm run build 编译