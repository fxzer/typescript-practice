// ReturnType<T> 从函数返回类型中获取返回类型
export function getUserInfo() {
  return { name: 'Tom', age: 18, address: 'beijing' }
}
type UserInfo = ReturnType<typeof getUserInfo> // {name: string, age: number, address: string}
