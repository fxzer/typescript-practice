/* 1. 用于提取函数类型的返回类型 */
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : void;

/* 
这个ReturnType类型接受一个函数类型T作为输入，并使用infer关键字将其返回类型绑定到类型变量R上。
如果T是一个函数类型，则返回R类型，否则返回 void类型。
 */
const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return false
}
type returnType = MyReturnType<typeof fn> //  "1 | false"
type returnType1 = MyReturnType<1> //  void


/* 2. 用于提取数组或元组类型的元素类型 */

type ElementType<T> = T extends (infer U)[] ? U : T extends readonly (infer V)[] ? V : never;
type NumberArray = number[];
type ReadonlyStringArray = readonly string[];

type NumberElementType = ElementType<NumberArray>; // number
type ReadonlyStringElementType = ElementType<ReadonlyStringArray>; // string


/* 3. 用于从函数类型中提取参数类型 */
type ParamsType<T> = T extends (...args: infer P) => any ? P : never;
function multiply(a: number, b: number,c: string): number {
  return a * b;
}

type MultiplyParamsType = ParamsType<typeof multiply>; // [number, number, string]
