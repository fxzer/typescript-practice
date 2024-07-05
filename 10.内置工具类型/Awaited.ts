/*  Awaited  */

export function asyncFunc<T>(value: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), 100)
  })
}

export async function testAwaited() {
  const str = await asyncFunc('hello')
  const num = await asyncFunc(10)
  const obj = await asyncFunc({ name: 'zhangsan', age: 18 })
}
