type A<T> = (x: T) => T

type B = <T>(x: T) => T

const numToNum: A<number> = x => x + 1

const strToStr: B = function<T>(x: T) {
  return x
}

//  1.泛型函数
interface GenericInterfaceForFunction<T> {
  (x: T): T
}
//  2.泛型函数类型
interface InterfaceForGenericFunction {
  <T>(x: T): T
}
