let arr1:number[] = [1,2,3,4,5,6,7,8,9,10]  //类型数组：number[]

let arr2:Array<number> = [1,2,3,4,5,6,7,8,9,10]  //泛型数组：Array<number>

/* number[] 与 Array<number> 区别 */
//1.语法不同
//2.类型不同
//3.使用场景不同
//4.数组类型的接口只能用于数组，而泛型可以用于数组、对象、函数等
//5.泛型可以指定默认类型、多个类型、类型范围、类型约束、类型别名，而数组类型的接口不可以



/* 对象数组 */
interface IPerson {
  name: string;
  age?: number;
}

let personArr1: IPerson[] = [
  { name: 'tom', age: 18 },
  { name: 'jerry', age: 20 },
]

let personArr2: Array<IPerson> = [
  { name: 'tom', age: 18 },
  { name: 'jerry',  },
]

/* 多维数组 */
let arr3: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
]

let arr4: Array<Array<number>> = [
  [1, 2, 3],
  [4, 5, 6],
]

/* 元组 */
let tuple1: [string, number,boolean,object] = ['tom', 18,true,{}]

function test1(...args:number[]){
  console.log(args)
}
// test1('tom','jerry','jack')
test1(1,2,3,4,5,6,7,8,9,10)
// test1(arr4) //类型“number[][]”的参数不能赋给类型“number”的参数。