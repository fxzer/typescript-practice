/* 变量取属性 */
/* 数组（数组是没法获取 length 属性的，因为有多少项是不固定的） */
type Names = string[];
type FirstName = Names[0]; // string
type ArrLen = Names['length']; //  🆗 number

// 元组（元组是可以获取 length 属性的，因为其长度是固定的）
type Language = ['js', 'java', 'python', 'rust'];
type Rust = Language[3]; // rust
type TupLen = Language['length']; // 🆗 4

// 字符串
type Str = 'hello';
type S = Str[0]; // ⚠️ 注意是 string，不是 h
type StrLen = Str['length'] // number 而非具体的数字

// 字符串原型方法
type Concat = 'h'['concat']; // String.prototype.concat 的类型定义

// 数字原型方法
type N = 1;
type ToFixed = N['toFixed'] // Number.prototype.toFixed 的类型定义


/* 获取类型所有属性 key */
type Keys = 'a' | 'b' | 'c';
type Obj = {
  [p in Keys]: string
}
/* 获取对象所有属性 */
type ObjKeys = keyof Obj; // 'a' | 'b' | 'c'

type Obj1 = {
  a: number;
  b: number;
  c: boolean;
}
type ObjKeys1 = keyof Obj1; //为什么不是 'a' | 'b' | 'c'  ？？  

/* 获取对象所有属性值 */
type ObjValues = Obj[ObjKeys1]; //  string ??

/* ⚠️箭头函数类型和空对象没有 key。例如: */
type F = () => void;
type K = keyof F; // never;
type Foo = keyof {}; // never; 