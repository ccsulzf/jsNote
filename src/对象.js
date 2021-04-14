/**
 * 什么是对象？
 *  多个数据的封装体
 *  用来保存多个数据的容器
 *  一个对象代表现实中的一个事物
 *
 * 为什么要用对象？
 *  统一管理多个数据
 *
 * 对象的组成
 *  属性：属性名+属性值
 *  方法：一个特殊的属性值
 *
 * 如何访问对象内部数据？
 *  student.name
 *  student['name'] -- 属性名包含特殊字符，- 或 属性名不确定
 */

var student = {
  name: "Tom",
  age: 23,
  setName: function (name) {
    this.name = name;
  }
};

student.setName("Bob");
console.log(student);
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
`;
