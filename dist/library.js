(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var a = 'a.js';

var b = function () {
    console.log('b.js');
};

console.log(a);
b();

console.log('c!!!');

var es6 = 'es6!!!';

console.log('' + es6);
console.log('watch!!!');
console.log('watch-gulp!!!');
{
    console.log('开发环境');
}

})));
//# sourceMappingURL=library.js.map
