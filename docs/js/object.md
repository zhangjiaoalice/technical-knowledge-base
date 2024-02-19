# Javascript 面向对象编程

## 对象
js 中对象是一种复合数据类型，允许存储多个值为一个单独的尸体，这些值称为对象的属性，可以通过属性名访问对象属性，可通过  对象字面量`{}`创建对象， 还可以用通过 `Object.create()`

* **<font color=red>两种创建对象的方式有什么区别？</font>**
    1. 通过 `{}` 字面量的方式创建的对象，会继承自 原型对象`Object.prototype`,这意味着这个新创建的独享可以继承和访问`Object.prototype` 所有的属性和方法，如 `.toString`、`.hasOwnProperty()`
    2. 通过 `{}` 字面量创建的对象没有显式的指定原型，但是它默认地继承了`Object.prototype`
    3. 通过 `Object.create(obj)`, 这个方法接收一个现有对象作为参数（这个参数是可选的如果没有传入参数，就使用 Object.prototype 作为原型） ，通过这个方法创建的对象会使用现有的对象作为创建新对象的`__proto__(原型)`
    4. 通过 `Object.create([obj])` 创建对象可以通过参数指定新对象的原型，<font color=red>这是与字面量方式的主要方式</font>，`Object.create(null) 穿件的对象没有原型`

### 构造函数
*构造函数是一种特殊的函数，用于初始化新创建对象的并为新创建的对象设置属性和方法*
1. 使用 `new` 关键字调用构造函数，以穿件新的对象实例
2. 箭头函数不能作为构造函数使用
3. 构造函数和类的区别
    * 类是 ES6+ 引入class语法作为面向对象编程的语法糖
    * 类的语法更简洁，提供了 继承、静态方法、实例方法
4. 构造函数中的 `this` 关键字
    * `this` 关键字引用的是新创建的对象实例
    * 通过new关键字调用构造函数时，this 指向新创建的对象
5. 通过new 关键字调用构造函数时发生了什么？
    * `创建新对象`: 首先，js会创建一个新的空对象，这个新的空对象将成为即将要返回的实例对象
    * `设置原型链`: 新创建对象的内部链接（[[Prorotype]]）会被设置为构造函数的 `prototype` 对象
    * `绑定this`: 构造函数中的this被绑定到新创建的对象上，这意味着在构造函数内部，你可以通过执行this关键字来访问和修改新对像的属性和方法
    * `执行构造函数`: 构造函数中的代码会被执行，这个过长中，可能会设置一些属性或者执行一些初始化的操作
    * `返回新对象`: 如果构造函数没有显式的返回一个非原始值（对象或者函数），则new表达式的结果是新创建的对象，如果构造函数返回了一个非原始值，那么这个返回值会成为new表达式的结果。如果构造函数返回了一个原始值（undefined、null、数字、字符串或者布尔值），者new表达式的结果仍然是新创建的对象，而不是返回原始值
    * `完成`: 构造函数一旦执行完毕，新创建的对象已经被初始化并准备好了，可以被赋值个一个变量或者进一步使用

### 对象属性
1. 访问对象属性的方式
    * 使用 `.` 语法或 `[]`(访问动态属性)
2. 删除对象属性
    * 使用 `delete` 操作符删除对象属性
3. 对象属性特征
    * <font color=red>数据属性</font>： 包含一个数据值的属性，一共有四个描述对象属性行为的特性：
        - `[[value]]`: 属性数据值
        - `[[Writable]]`: 属性值是否可以被更改
        - `[[Enumerable]]`: 属性是否可以被枚举， 可以被枚举的属性可以通过 `for...in` 或者 `Object.keys()`进行遍历
        - `[[Configurable]]`: 属性的类型是否可以被改变
    * <font color=red>访问器属性</font>: 不包含属性数值，而是包含一对 `getter` 和`setter`函数，访问器属性也有四个特性：
        - `[[Get]]`: 在读取属性时调用
        - `[[Set]]`: 在写入属性时调用
        - `[[Enumerable]]`
        - `[[Configurable]]`
4. `Object.defineProperty(obj, propertyName, descriptor)` 方法
    * 这个方法可以直接在一个对象上定义一个新的属性，或者修改一个对象的现有属性，并返回这个对象
    * 参数：
        - `obj`: 要定义或者修改的对象
        - `propertyName`: 属性名称
        - `descriptor`: 属性描述符对象
5. `Object.prototype` 常用的属性和方法:
    * 属性
        - `constructor`: 指向创建该实力对像的构造函数
        - `__proto__`: 指向该对象的原型对象，在严格模式下禁止使用，建议使用 `Object.getPrototype()` 获取对象的原型对象
    * 方法
        - `toString()`: 返回 `[object Array]`
        - `toLocalString()`: 返回一个表示该对象的本地化字符串，常用于日期和时间对象
        - `valueOf()`: 返回对象的原始值， 对于大多数的对象而言，这个方法返回的就是对象本身，但对于像日期和时间这样的对象，这个方法返回的一个更基本的数据类型（时间戳）
        - `hasOwnProperty(propertyName)`: 返回一个布尔值，表示对象自身<font color=red>(不包括原型链)</font> 是否有指定的属性
        - `isPrototypeOf(object)`: 返回一个布尔值，表示该对象是否在另一个对象的原型链上
        - `propertyIsEnumerable(propertyName)`: 返回一个布尔值，表示对象属性是否可以通过 `for...in`进行枚举

### 对象方法
1. 对象方法中的 `this` 指向
    * 通常情况下 `this` 指向调用该方法的对象实例
    * 如果方法被当作普通的函数调用（不是作为对象方法），this 指向全局对象（window）【严格模式下是 undefined】

2. 如何改变对象方法中 `this` 指向
    * 使用 call、apply、bind 方法
        - 以函数的形式调用时，this永远指向window
        - 以对象形式调用时，this指向调用的方法的对象
        - 以构造函数形式调用时，this指向新创建的对象
        - 使用call、apply、bind 调用时，this指向指定的target对象
    * `orginObj.call(targetObj, param1, param2...)` 使用call方法改变 orginObj对象的this指向，方法接收一个对象作为第一个参数，并将orginObj的this指向该对象（targetObj），参数作为其余参数传给方法
    * `orginObj.apply(targetObj, [param1, param2, param3...])`
    * `originObj.bind(targetObj)`: bind 方法会创建一个新的函数，当这个函数被调用的时候，this被设置为提供的值，无论它如何被调用

3. 闭包和对象方法的关系
    * 对象方法也可以形成闭包，因为他们可以方位定义它们的对象的属性和其他方法
    * 当对象方法被调用时就形成了一个闭包，可以访问和修改定义它的对象状态

4. 对象方法的上下文
对象方法的上下文指，对象方法被调用时所处的环境

### 原型和原型链
*<font color=green>原型：每个js对象都有一个原型对象，原型对象定义了该对象继承的属性和方法</font>*

*<font color=green>原型链：当试图访问一个对象的某个属性的时候，如果对象自身没有该属性或方法，js会沿着原型链向上查找，直到找到该属性或者方法，直到原型链的顶端`null`</font>*

1. 如何访问对象的原型？
    * 通过 `obj.__proto__` 属性（非标准）或者 `Object.getPrototypeOf()` 方法访问对象原型
2. 原型污染
    * 原型污染指当不当的修改或者添加属性到原型对象上，这可能会导致意外的行为或者安全问题(例如： 向Object.prototype 添加属性或者方法会影响到所有的对象实例)
    * 避免措施：
        - 避免修改内置对象的原型，如： `Object.prototype`、`Array.prototype` 等
        - 通过 `Object.create(null)`方法来创建对象，从而避免原型链上的污染
        - 修改原型之前，确保要完全理解原型链的工作原理和潜在风险
3. 圆形链和原型对象在ES6类语法中如何体现
    * ES6 中，类语法是原型继承的语法糖。当定一个类的时候，实际上会创建一个原型对象，并将改对象赋值给类的 prototype属性
    * 类的实例会继承这个原型链上的所有方法和属性
    * 继承可以通过 extends 关键字来实现，子类会继承父类的 prototype 对象，并且可以在其上添加或者覆盖原有属性


### 封装
*<font color=green>封装: 将对象的属性和方法隐藏在内部，值通过接口与外部进行交互的过程</font>*
1. js 如何实现封装？
    * js 是一种动态类型、原型基础的语言，封装通常是通过创建对象并定义其属性和方法来实现
    * 构造函数用于初始化对象的属性和方法，这些方法可以作为对象的公开接口
    * 通过在构造函数定义属性并使用方法来访问和修改这些属性，可以实现对属性的封装和隐藏


### 多态
*<font color=green>多态：同一个操作用于不同的对象上面，可以产生不同的行为和结果，js 本身不支持传统意义上的多态，可以通过一些模式和技术来模拟多态行为</font>*
1. js 如何模拟多态？
    * `函数重载`: js 不支持函数重载，但是可以通过检查传入参数的类型和数量来模拟函数重载
        - 通过检查函数参数类型和数量来实现类似重载的功能，例如可以使用 `arguments` 对象或者 ES6 剩余参数来检查传入的参数
    * `函数重写`: 通过原型链和继承，子类可以重写父类的方法，从而实现多态
    * `接口和抽象类`: 虽然js 没有接口和抽象类的概念，但可以通过组合模式和ES6的类语法来模拟这些概念
2. 多态实际应用场景
    * js 中的多态概念通常用于实现灵活可扩展的代码
    * 设计模式中的工厂模式、策略模式、观察者模式
3. ts 中多态的实现
    * ts 中，可以使用接口和类实现多台，通过定义接口和类，可以规定方法签名，并通过继承实现接口来模拟多态行为

### 继承
*<font color=green>继承： 允许子类继承父类的属性和方法，js 中可以通过 `原型链来实现继承`，子类可以通过原型链访问父类的属性和方法，通过继承可以创建具有共享属性和方法的对象，从而减少冗余和提高代码质量</font>*

1. 原型链继
- **<font color=green>通过将子类的原型（prototype）对象设置为父类的一个实例对象，可以实现原型链继承</font>**
- **<font color=red>优点：</font>** 子类可以通过原型链访问到父类原型链上的属性和方法
- **<font color=red>缺点：</font>** 如果父类的属性是引用类型，那么所有子类实例都会共享这个属性，修改其中一个子类实例的属性会影响到其他的子类实例


```javascript
function Parent() {
    this.name = 'Parent';
    this.list = [1, 2, 3, 4];
}

function Child() {
    this.type = 'child';
}

// 将子类 Child 的原型对象设置为 Parent 的实例
Child.prototype = new Parent();

const child1 = new Child();
const child2 = new Child();
console.log(child1.name); // 'Parent'
console.log(child2.name); // 'Parent'
child1.list.push(22);
console.log(child1.list); // [1, 2, 3, 4, 11]
```

2. 借助构造函数继承
- **<font color=green>通过在子类构造函数中调用父类构造函数来实现继承</font>**
- **<font color=red>优点：</font>** 每个子类的实例都会继承一份父类的属性，子类的多个实例之间不会互相干扰
- **<font color=red>缺点：</font>** 方法都是在构造函数中定义的，无法实现函数复用，每个实例都会有一份相同的方法，会造成内存浪费

```javascript
function Parent() {
    this.name = 'Parent';
    this.list = [1, 2, 3, 4];
}

function Child() {
    // 将 当前的this指向 Child 的实例对象
    Parent.call(this);
    this.type = 'child'
}

const c1 = new Child();
const c2 = new Child();
console.log(c1.list === c2.list); // false,每个实例都会继承一份父类的属性，互不干扰
```

3. 组合继承
- **<font color=green>组合继承结合了原型链继承和借用构造函数继承的优点，先通过借用构造函数继承父类的属性，然后再将父类的实例对象作为子类的原型对象，实现继承</font>**
- **<font color=red>优点：</font>** 即保证了子类有自己的属性，又实现了方法的复用
- **<font color=red>缺点：</font>** 调用了两次父类构造函数，生成了两份不你要的属性，造成内存浪费

```javascript
function Parent() {
    this.name = 'Parent';
    this.list = [1, 2, 3, 4];
}

function Child() {
    Parent.call(this); // 第一次调用，继承父类属性
    this.type = 'child';
}

// 第二次调用， 设置 Child 的原型对象为Parent的一个实例，从而继承 Parent 的实例方法
Child.prototype = Object.create(Parent.Prototype);
// 修正构造函数的子类原型对象的构造函数的指向
Child.prototype.constructor = Child;
const c1 = new Child();
const c2 = new Child();

console.log(c1.list === c2.list); // false
```

4. 原型式继承
- **<font color=green>原型式继承是借助原型可以基于已有对象创建新对象，同时还不必因此创建自定义类型，这种方式通过`Object.create()` 实现</font>**
- **<font color=green>缺点：</font>** 如果属性是引用类型，那么所有实例都会共享这个属性

```javascript
function createObject(obj) {
    function F() {}
    F.prototype = obj;
    return new F();
}

const parent = {
    name: 'Parent',
    list: [1, 2, 3, 4];
}

const child = createObject(parent);
```

5. 寄生继承
- **<font color=green>寄生式继承的思路和工厂模式类似，即创建一个仅用于封装继承过程的函数，该函数在内部以某种方式来增强对象，最后返回对抗</font>**
- **<font color=red>缺点：</font>** 如果属性是引用类型，那么所有实例都会共享这个属性

```javascript
function createObject(obj) {
    const clone = Object.create(obj)
    clone.say = function() {
        console.log('say hello');
    }
    return clone;
}
const parent = {
    name: 'Parent',
    list: [1, 2, 3, 4, 5]
}
const child = createObject(parent);
child.say(); // 'say hello'
```

6. 寄生组合继承
- **<font color=green>寄生组合继承是寄生继承的优化版本， 借用构造函数继承父类属性，然后将子类的原型设置为父类的一个浅拷贝（而不是父类的一个实例）</font>**
- **<font color=red>优点：</font>** 这样既避免了组合继承中调用两次父类构造函数的问题，又保证了每个子类实例都有属于自己的属性和方法
- **<font color=red>这是js中最常用的继承模式之一</font>**

```javascript
function inheritPrototype(child, parent) {
    const prototype = Object.create(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}
function Parent() {
    this.name = 'Parent';
    this.list = [1, 2, 3, 4];
}
function Child() {
    Parent.call(this);
    this.type = 'child';
}
inheritPrototype(Child, Parent);
```
