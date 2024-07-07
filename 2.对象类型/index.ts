/* Object object {}区别 */
export const obj1: Object = false // 23  false 等 都可以赋值，包含所有类型，顶级对象类型
export const obj2: object = {} // 只能赋值对象，不能赋值其他类型
// obj2 = ''
let obj3: {} = {} // 只能赋值对象，不能赋值其他类型 可理解为 new Object()
obj3 = { name: 'adf' }
obj3 = Symbol('as')

// 上述三种都无法新增没有的属性 如：obj1.name = 'tom' 会报错

/* 接口 */
interface IPerson1 {
  name: string
  age?: number
  readonly address: string[] // 只读属性
  [propName: string]: any // 索引签名
}

// 接口继承
interface IStudent extends IPerson1 {
  sno: number
  [propName: string]: any // 索引签名
}

const stu: IStudent = {
  sno: 123,
  name: 'tom',
  address: ['北京', '上海'],
  age: 10,
}

// 函数类型接口
interface ISearchFunc {
  (source: string, subString: string): boolean
}

const mySearch: ISearchFunc = function (source: string, subString: string) {
  return source.search(subString) !== -1
}

type PersonMap1 = Record<'name', string> // { name: string; }
type PersonMap2 = Record<number, string> // { [index: number]: Person }

/** 由数据获取类型 */
export const person = {
  name:'tom',
  age:18,
  address:['北京','上海']
}
type IPerson = typeof person
