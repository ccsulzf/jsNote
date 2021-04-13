import "./styles.css";

/**
 *  数据类型
 *  基本类型：
 *    String
 *    Number
 *    Boolean
 *    Null
 *    Undefined
 *  对象类型：
 *    Object
 *    Symbol
 *  判断：
 *    typeof -- 返回数据类型的字符串形式
 *    instanceof -- 对象的具体类型
 *    === -- 严格相等
 *    Object.is(value1，value2)
 *  变量类型：
 *    基本类型：保存的是基本类型
 *    引用类型: 保存的对象类型的引用
 *
 *  什么是数据？
 *   存储在内存中用来存储特定信息
 *  什么是内存？
 *   内存条->通电产生内存空间->存储数据->断电，内存空间和数据都消失
 *   栈: 全局变量｜局部变量和
 *   堆: 对象
 *  什么是变量？
 *   变量名 + 变量值
 *
 *
 */

function test() {}

console.log(typeof test);
console.log("isArray", Array.isArray([]));
console.log(typeof a === "undefined"); // true
console.log({} instanceof Object); // true
console.log([] instanceof Array);
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
`;
