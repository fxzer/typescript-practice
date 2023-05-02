type Example = { 
    name: string;
}
const example: Readonly<Example> = { name: "example" };
// example.name = 'jack' /* 无法为“name”赋值，因为它是只读属性。 */


type Example1 = {
  a:{
    b:number
  }
}
const example1: Readonly<Example1> = { a:{b:1} };
example1.a.b = 2 /*  不报错 */

/* =========== 深度限制只读 ============== */
type DeepReadonly<T> = {
  readonly [P in keyof T] : DeepReadonly<T[P]> 
};
// type DeepReadonly<T> = {
//   readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
// };
type Example2 = {
  a:{
    b:number
  }
}

const example2: DeepReadonly<Example2> = { a:{b:1} };
// example2.a.b = 2 /*  报错 */