/**
 * 什么是函数？
 *  实现特定功能的封装体
 *  只有函数可以执行，其他数据类型都不能执行
 *
 * 为什么要使用函数？
 *  提高代码复用性
 *  提高代码的可读性
 *
 * 如何定义函数？
 *   函数声明 -- 可以在函数之前调用
 *   函数表达式 -- 先声明再使用
 *
 * 如何执行函数？
 *  test()
 *  test.call()
 *  test.apply()
 *  obj.test() //作为对象的方法
 *  (test())() // IIFE(Immediately Invoked Function Expression)
 *    隐藏实现(从程序角度来说我不知道这个匿名函数干了什么)
 *    不会污染外部命名空间
 *    js模块（es6已经有自己的模块了）
 *
 * 什么函数才是回调函数？
 *  你定义的
 *  你没有调用
 *  但是最终执行了
 *
 * 常见的回调函数？
 *  dom事件回调函数
 *  定时器回调函数
 *  ajax请求回调函数
 *  生命周期回调函数
 *
 * 函数中的this
 *  this是什么？
 *    任何函数本质上欧式通过某个对象来调用的
 *    所有函数内部都有一个变量this
 *    this的值是调用函数的当前对象
 *  如何确定this的值？
 *    test():window
 *    p.test():p
 *    test.call(obj):obj
 */

fun1.call({ age: 13 }); // 13

//  函数声明
function fun1() {
  console.log(this.age);
}

// fn2(); // TypeError: fn2 is not a function
// 函数表达式
var fn2 = function () {};

(function () {
  console.log("IIFE");
})();

//
(function () {
  var a = 1;
  function test() {
    console.log("a:", ++a);
  }

  window.$ = function () {
    return {
      test: test
    };
  };
})();

window.$().test();

console.log("--------");

function Person(color) {
  this.color = color;
  this.getColor = function () {
    console.log(this);
    return this.color;
  };

  this.setColor = function (color) {
    this.color = color;
  };
}

var p = new Person("res");
console.log(p.getColor());
console.log(p.getColor.call({ color: "red" })); // red
document.getElementById("btn").onclick = function () {
  console.log("click");
};
