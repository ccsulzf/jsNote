/**
 * 变量声明提升：
 *    通过var定义的变量，在定义语句之前就可以访问到
 *    值：undefined
 * 函数声明提升：
 *    通过function声明的函数，在之前就可以直接调用
 *    值：该函数
 */
fn1(); // 函数提升
function fn1() {
  console.log(a); // 变量提升
  var a = 4;
  /**
   * var a;
   * console.log(a);
   * a = 4;
   */
}

// fn2(); //undefined()
// var fn2 = function () {};

/**
 * 全局执行上下文
 *   在执行全局代码前将window确定为全局执行上下文
 *   对全局代码进行预处理
 *      var定义的全局变量，添加为window的属性
 *      function声明的全局函数，添加为window的方法
 *      this=》window
 *
 * 函数执行上下文
 *   在调用函数，准备执行函数体之前，创建对应的函数上下文
 *   对函数代码进行预处理
 *      函数变量=》执行上下文
 *      arguments赋值参数列表=》执行上下文
 *      var定义的局部变量=》执行上下文
 *      this=>赋值调用函数的对象
 */

function fn3(a1) {
  console.log(a1);
  console.log(a2);
  console.log(this);
  var a2 = 3;
  function a3() {
    console.log("a3()");
  }
}
fn3(2);

/**
 * 执行上下文栈
 *  在全局代码执行前，JS引擎会常见一个栈来存储管理所有的执行上下文
 *  在全局执行上下文确定后，将其添加到栈中
 *  在函数执行上下文创建后，将其添加到栈中
 *  在当前函数执行完后，将栈顶的上下文一处
 *  当所有的代码执行完成后，栈中只剩下window
 */

var bar = function () {
  console.log("bar");
  foo();
};

var foo = function () {
  console.log("foo");
};

bar();

function fn5(i) {
  if (i == 4) {
    return;
  }
  console.log("begin", i);
  fn5(i + 1);
  console.log("end", i);
}

fn5(1);
