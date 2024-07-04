function add(a: number, b: number): number {
  return a + b
}
console.log(add(1, 2))

function plus(a: string, b: string): string {
  return a + b
}
console.log(plus('1', '2'))

/*  ====> 引入泛型，让函数更灵活 */

function add1<T>(a: T, b: T): T[] {
  return [a, b]
}
console.log(add1<number>(1, 2))
console.log(add1<string>('1', '2'))

/* 类型别名泛型 */
type A<T> = string | number | T
const a1: A<boolean> = true

/* 泛型约束 */
interface ILength {
  length: number
}
function loop<T extends ILength>(a: T, b: T): void {
  for (let i = 0; i < b.length; i++) {
    console.log(i)
  }
}
loop<string>('hello', 'world')
loop<string[]>(['9', '10'], ['1', '2', '3', '4', '5', '6', '7', '8'])

/* 约束对象的 key */
const expUser = {
  name: 'tom',
  age: 19,
}
type Key = keyof typeof expUser // "name" | "age"
function getValue<T extends object, K extends keyof T>(obj: T, key: K): T[K] { // T[K]表示T对象中的K属性
  return obj[key]
}
console.log(getValue(expUser, 'name'))

/* 多个泛型 */
function add3<T, K>(a: T, b: K): [T, K] {
  return [a, b]
}
console.log(add3<number, string>(1, '2'))
console.log(add3<boolean, string>(true, '2'))
