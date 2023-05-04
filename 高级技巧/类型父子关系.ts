type ParentType = 1 | 2 | string
type SubType = 1

let parentData: ParentType = 2;
let subData: SubType = 1;

// subData = parentData; // ❌ 父类型不能赋值给子类型的值
parentData = subData; // 🆗

/* 类型中的条件语句 */
type IsSub = SubType extends ParentType ? true : false; // IsSub 的类型值为 true


/* never 类型是所有类型的子类型 */
function foo1(): never {
  throw new Error()
}

const result1: 1 = foo1(); // 可以赋值，类型不会报错就证明了 never 类型是 1 的子类型


/* 对象判断子类型，需要逐个属性比较 */
// 1. 属性个数相同
type Button1 = {
  size: 'mini' | 'small' | 'medium' | 'large' ,
}

type MyButton1 = {
  size: 'mini',
}
type IsSub1 =  MyButton1 extends Button1 ? true : false; // true


//属性个数相同，属性类型属于子类型
type Button2 = {
  size: 'mini' | 'small' | 'medium' | 'large' ,
  color: string,
}

type MyButton2 = {
  size: 'mini',
  color:'red'
}

type IsSub2 =  MyButton2 extends Button2 ? true : false; // true


//2.属性个数不同

//多了个属性  q:为什么多了个属性是true a:因为多了个属性，不会影响到原有的属性 
type Button3 = {
  size: 'mini' | 'small' | 'medium' | 'large' ,
}

type MyButton3 = {
  size: 'mini',
  color: string,
}

type IsSub3 =  MyButton3 extends Button3 ? true : false; // true

// 少了个属性 a:为什么少了个属性是false q:因为少了个属性，会影响到原有的属性
type Button4 = {
  size: 'mini' | 'small' | 'medium' | 'large' ,
  color: string,
}

type MyButton4 = {
  size: 'mini',
}

type IsSub4 =  MyButton4 extends Button4 ? true : false; // fasle

/* undefined void never any  */
let unf:undefined
let voi:void
let nev:never
let any:any
let nul:null
let sss:string

unf = any
voi = any 

// nev = any // ❌
// nev = unf // ❌
// nul = unf
// nul = any
// voi = nev
// str = unf; // ❌ undefined 不是其他类型子类型

any = unf  //🆗 undefined 是 any 类型子类型
voi = unf //undefined 是 void 类型子类型

