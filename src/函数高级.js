/**
 * .函数的prototype属性
 *    每个函数都有prototype属性，它默认指向一个空对象{}（原型对象）,
 *    原型对象中有一个属性contructor,它指向函数对象
 * 函数的prototype属性:在定义函数时自动添加的，默认值时一个空对象
 * 对象的__proto__属性:创建对象时自动添加的，默认值为构造函数的prototype属性值
 *
 */
console.log(Date.prototype);
function Fn() {
  console.log("this", this);
  this.test2 = function () {
    console.log("test2");
  };
}
console.log(Fn.prototype);
console.log(Fn.prototype.constructor === Fn);

// 给原型对象添加属性（一般是方法） ===》所有的实例对象都可以使用
Fn.prototype.test = function () {
  console.log("test");
};

var fn1 = new Fn();
console.log(fn1);

console.log("---------");

/**
 * 每个实例对象都有一个__proto__，可成为隐式原型
 */
console.log(fn1.__proto__);

// 对象的隐式原型对应起构造函数的显示原型的值
console.log(Fn.prototype === fn1.__proto__);

fn1.test();
fn1.test2();
