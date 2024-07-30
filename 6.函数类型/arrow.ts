/** 箭头函数类型注解 */
export const foo1 = <T>(x: T): T => x
export const foo2 = <T extends {}>(x: T): T => x
export const foo3 = <T extends Record<string, unknown>>(x: T): T => x
export const foo4: <T>(x: T) => T = x => x

// foo3(1) // Error ❌
foo3({ a: 1, b: 2 })
foo4(1)

function identity<T>(arg: T): T {
  console.log(arg)
  return arg
}

type CurrentAuthorityType = 'admin' | 'user'

function renderAuthorize<T>(Authorized: T): ((currentAuthority: CurrentAuthorityType) => T) {
  return (
    currentAuthority: CurrentAuthorityType,
  ): T => {
    return 'admin' as unknown as T
  }
}
type CreateArrayFunc = <T>(length: number, value: T) => Array<T>
let createArray: CreateArrayFunc
createArray = function<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

// 函数重载
// 函数重载示例
function parseValue(value: string): number
function parseValue(value: number): string
function parseValue(value: string | number): number | string {
  if (typeof value === 'string') {
    return Number.parseFloat(value)
  }
  else {
    return value.toString()
  }
}

parseValue('42') // 42
parseValue(42) // "42"
