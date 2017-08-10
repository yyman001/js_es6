import a from './a.js';
import b from './b.js';

console.log(a);
b();

console.log('c!!!')

const es6 = 'es6!!!';

console.log(`${es6}`)
console.log('watch!!!')
console.log('watch-gulp!!!')
 if (ENV !== 'production') {
    console.log('开发环境')
} else {
    console.log('生成环境')
} 