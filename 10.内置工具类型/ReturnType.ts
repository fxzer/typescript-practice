// ReturnType<T> 从函数返回类型中获取返回类型
export function getUserInfo() {
  return { name: 'Tom', age: 18, address: 'beijing' }
}
type UserInfo = ReturnType<typeof getUserInfo> // {name: string, age: number, address: string}

const fn = () => 123

type fnReturn = ReturnType<typeof fn> // number

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
type fnReturn1 = MyReturnType<typeof fn> // number
