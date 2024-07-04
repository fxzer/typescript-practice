const arrayay1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // 类型数组：number[]

const array2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // 泛型数组：Array<number>

/* number[] 与 Array<number> 区别 */
// 1.语法不同
// 2.类型不同
// 3.使用场景不同
// 4.数组类型的接口只能用于数组，而泛型可以用于数组、对象、函数等
// 5.泛型可以指定默认类型、多个类型、类型范围、类型约束、类型别名，而数组类型的接口不可以

/* 数组 */
const arr1 = [1, 2, 3]
arr1[0] = 3 // ✅ OK: 数组是可变的。

/* 只读数组 */
type Arr1 = readonly number[]
const arr2: Arr1 = [1, 2, 3]
// arr2[0] = 3; // ❌ Error: readonly

/* 对象数组 */
interface IPerson {
  name: string
  age?: number
}

const personArray1: IPerson[] = [
  { name: 'tom', age: 18 },
  { name: 'jerry', age: 20 },
]

const personArray2: Array<IPerson> = [
  { name: 'tom', age: 18 },
  { name: 'jerry' },
]

/* 多维数组 */
const array3: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
]

const array4: Array<Array<number>> = [
  [1, 2, 3],
  [4, 5, 6],
]

function test2(...args: number[]) {
  console.log(args)
}
// test2('tom','jerry','jack') //  类型“string”的参数不能赋给类型“number”的参数。   ❌
test2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) // ✅
// test2(array4) //类型“number[][]”的参数不能赋给类型“number”的参数。
