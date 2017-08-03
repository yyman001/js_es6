(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var a = 'a.js';

var b = function(){
    console.log('b.js');
};

console.log(a);
b();

console.log('c!!!');

const es6 = 'es6!!!';

console.log(`${es6}`);

})));
