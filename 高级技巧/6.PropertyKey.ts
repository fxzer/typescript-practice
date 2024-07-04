let validKey: keyof any // string | number | symbol

const expKey: PropertyKey = 'name' // string | number | symbol

const str: string = 'key'
const num: number = 1
const sym: symbol = Symbol('key')
const obj1 = {}
const obj2 = {
  [str]: 123,
  [num]: 456,
  [sym]: 789,
  [expKey]: 123,
  // [obj1]: 123, 计算属性名的类型必须为 "string"、"number"、"symbol" 或 "any"。
}
