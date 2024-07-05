// Parameters<T> 获取函数参数类型
export function getUserInfo2(name: string, age: number) {
  return { name, age }
}
type FnParams = Parameters<typeof getUserInfo2> // [string, number]
