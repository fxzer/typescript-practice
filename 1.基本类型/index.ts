/* 字符串，数字，布尔、字面量 */

/* 字面量类型 */
let str1: 'hello world'
// str1 = 'hello world ' // 报错

let str2: `${string} world`
// str2 = 'hello world ' // 报错

let str3: `hello ${string}`
str3 = 'hello world ' // 不报错
// str3 = ' hello world ' // 报错

type Size = 'small' | 'medium' | 'large'
type Color = 'red' | 'green' | 'blue'
type Style = `${Size} ${Color}`

const style: Style = 'small red'
// style = 'small pink' // 报错

/* never类型 */
function nerverFn(): never {
  throw new Error('报错了')
}
function nerverFn1(): never {
  while (true) {
    console.log('hello')
  } // 死循环
}
type Hobby = 'eat' | 'sleep' | 'play'
function nerverFn2(hobby: Hobby) {
  switch (hobby) {
    case 'eat':
      console.log('eat')
      break
    case 'sleep':
      console.log('sleep')
      break
    case 'play':
      console.log('play')
      break
    // 兜底逻辑处理
    default:
      const check: never = hobby
      break
  }
}

/* Symbol类型 :创建唯一的值,解决对象属性覆盖的问题 */
const symbol1 = Symbol('hello')
const symbol2 = Symbol('hello')
console.log(symbol1)
console.log(symbol2)
console.log(symbol1 === symbol2) // false

// 如何让symbol1 === symbol2 ？ Symbol.for() ：创建全局唯一的值 ，如果存在就返回，不存在就创建
console.log('symbol1 === symbol2:', Symbol.for('hello') === Symbol.for('hello')) // true;

const symbolObj = {
  name: 'tom',
  age: 18,
  [symbol1]: 'hello',
  [symbol2]: 'hello2',
}

// 读取对象的键为symbol1的值两种方式：
console.log('[ Object.getOwnPropertySymbols(symbolObj) ]-69', Object.getOwnPropertySymbols(symbolObj))
console.log('[ Reflect.ownKeys(symbolObj) ]-71', Reflect.ownKeys(symbolObj))

function foo(): never {
  throw new Error()
}

const a: 1 = foo() // 可以赋值，类型不会报错就证明了 never 类型是 1 的子类型

/* 类型推论 */
const str11 = 'hello world'
// str11 = 123 // 报错

let str22
str22 = 'hello world'
str22 = 123 // 不报错

let str33: string
str33 = 'hello world'
// str33 = 123 // 报错

/* 类型别名 */
type StrOrNum = string | number
let str4: StrOrNum

/* type 高级用法 extends：包含的意思，左边的值作为右边子类型 */
/*     类型层级关系   从上往下，上层包含下级
    1. any unknown
    2. Object
    3.Number String Boolean Symbol
    4. number string boolean symbol
    5. 123 '123' true false
    6. null undefined void never
*/
type newNum1 = 1 extends 2 ? true : false // false
type newNum2 = 1 extends number ? true : false // true

type newNum3 = 1 extends object ? true : false // false
type newNum4 = 1 extends Object ? true : false // true

type newNum5 = 1 extends never ? true : false // false
type newNum6 = 1 extends boolean ? true : false // false

/* =================== 字符串操作  =================== */

/* 1 去除字符串中 _ */
type DelUnderline<T extends string> = T extends `${infer LeftWords}_${infer RightWords}`
  ? `${LeftWords}${RightWords}`
  : T

// 测试用例
type HelloWorld = DelUnderline<'hello_world'> // helloworld（LeftWords 为 hello，RightWords 为 world）
type World = DelUnderline<'_world'> // world（LeftWords 为空字符串，RightWords 为 world）
type Hello = DelUnderline<'hello_'> // hello（LeftWords 为 hello，RightWords 为空字符串）

/* 2.首字母大写 */
type MyCapitalize<T extends string> = T extends `${infer First}${infer Rest}`
  ? `${Uppercase<First>}${Rest}`
  : T

type cap1 = MyCapitalize<'hello'> // "Hello"（First 为 "h"，Rest 为 "ello"）
type cap2 = MyCapitalize<'bA'> // "B" （First 为 "h"，Rest 为空字符串）
type cap3 = MyCapitalize<''> // 当为空字符串时，会走到 false 的分支，返回空字符串
