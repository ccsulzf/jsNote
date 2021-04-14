import "./styles.css";

/**
 *  数据类型
 *  基本类型：
 *    String
 *    Number
 *    Boolean
 *    Null
 *    Undefined
 *    Symbol (es6)
 *  对象类型：
 *    Object
 *  判断：
 *    typeof -- 返回数据类型的字符串形式
 *      typeof null // 'object'
 *      typeof [] // 'object'
 *      typeof fn // 'function'
 *    instanceof -- 对象的具体类型
 *    === -- 严格相等
 *    Object.is(value1，value2)
 *  变量类型：
 *    基本类型：保存的是基本类型
 *    引用类型: 保存的对象类型的引用
 *
 *  什么是数据？
 *   存储在内存中用来存储特定信息
 *   数据的特点：可传递，可运算(赋值运算，逻辑运算，算术运算，函数运算)
 *  什么是内存？
 *   内存条->通电产生内存空间->存储数据->断电，内存空间和数据都消失
 *   栈: 全局变量｜局部变量
 *   堆: 对象
 *  什么是变量？
 *   变量名 + 变量值
 *  内存，数据，变量三者之间的关系：
 *    内存用来存储数据的临时空间
 *    变量是数据在内存中的标识
 *
 *  var a = xxx
 *   xxx是基本数据，保存的就是该数据
 *   xxx是对象，保存的对象的地址值
 *   xxx是变量，保存的是xxx的内存内容（基本数据｜｜对象）
 *  var a = {age:123};
 *  var a = b;
 *  b.age = 345;
 *
 *  js调用函数时传递变量参数时，是值传递还是引用传递
 *  理解1: 都是值（基本类型｜对象对应的地址值）传递
 *  理解2: 可能是值传递，也可能是引用传递（地址值）
 *
 *  js引擎如何管理内存？
 *  内存的生命周期：
 *    .分配内存空间
 *    .存储数据
 *    .释放内存
 *        局部变量：函数执行完自动释放
 *        对象：成为垃圾对象后被垃圾回收器回收
 */

function test() {}

console.log(typeof test);
console.log("isArray", Array.isArray([]));
console.log(typeof a === "undefined"); // true
console.log({} instanceof Object); // true
console.log([] instanceof Array);

var a = { age: 123 };
var b = a;
b.age = 345;

console.log(a);

// obj 和 a指向堆内存的同一个数据
// obj = {age:456} 指向了堆内存的另一个数据
// 没有去修改a所指向的内容
function fn(obj) {
  obj = { age: 456 };
}
fn(a);
console.log(a); // {age:345}

// 基本数据类型值传递（值的拷贝传递）
var num = 3;

function fn1(num) {
  num = num + 1;
}

fn1(num);
console.log(num); // 3

function fn2() {
  var b = {};
}

fn2(); // 在函数执行完，b是自动释放，b所指向的对象在后面的某个时刻由垃圾回收器回收
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
`;
