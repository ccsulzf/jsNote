console.log(123);
/**
 * 原型链(隐式原型链)
 *    先在自身属性中查找，找到返回
 *    如果没有，沿着__proto__寻找，找到返回
 *    如果最终没有找到，返回undefined
 * 作用：查找对象的属性
 */
function Fn() {
  this.test1 = function () {
    console.log("test1");
  };
}

Fn.prototype.test2 = function () {
  console.log("test2");
};

var fn1 = new Fn();
fn1.test1();
fn1.test2();
// Object 是一个函数对象
console.log(Object); // f Object(){}

console.log(Object.prototype.__proto__); // null

// 在ES6中会报错Error: Test is not a constructor
// 所以下面代码应该是被转换成es5了
const Test = () => {};
const test = new Test();
console.log(Test.prototype === test.__proto__);
console.log(Test.prototype.constructor);

/**
 * 函数的显示原型指向的对象默认是空Object实例对象(但Object不满足)
 */

console.log(Fn.prototype instanceof Object); // true
console.log(Object.prototype instanceof Object); // false
console.log(Function.prototype instanceof Object); // true

/**
 * 所有函数都是Function的实例(包含Function)
 * function Foo(){}
 * var Foo = new Function()
 */

/**
 * Object的原型对象是原型链的尽头
 */
console.log(Object.prototype.__proto__); // null
