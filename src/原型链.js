console.log(123);
/**
 * 原型链(隐式原型链)
 *    先在自身属性中查找，找到返回
 *    如果没有，沿着__proto__寻找，找到返回
 *    如果最终没有找到，返回undefined
 * 作用：查找对象的属性
 *
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

/**
 * 读取对象的属性值时：会自动沿着原型链进行查找
 * 设置对象的属性值时：不会查找原型链，如果当前对象中没有此属性，直接添加此属性
 * 方法一般定义在原型中，属性一般通过构造函数定义在对象本身上
 */
Fn.prototype.a = "xxx";
var fn3 = new Fn();
var fn4 = new Fn();
fn4.a = "yyy";
console.log(fn3.a); // xxx
console.log(fn4.a); // yyy

console.log(Function instanceof Object); // true
console.log(Object instanceof Function); // true
console.log(Object instanceof Object); // true
console.log({} instanceof Object); // true

console.log(Fn instanceof Object);
