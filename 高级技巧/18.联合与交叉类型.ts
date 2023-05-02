//================== 交叉类型 ==================
 
type Name = { name: string };
type Age = { age: number };

const name1 =  { name: 'tom'};
const age1 =  { age: 23 };
const nameAndAge =  { name: 'tom', age: 23 };

type InterPerson = Name & Age; 
let iperson: InterPerson 

// iperson = name1 //报错
// iperson = age1 //报错
iperson = nameAndAge //正确


//================== 联合类型 ==================
type UnionPerson = Name | Age;
let uperson1:UnionPerson 

uperson1 = name1 //正确
uperson1 = age1 //正确
uperson1 = nameAndAge //正确


type PartialPerson = Partial<InterPerson>; //Partial<T> 的作用就是将某个类型里的属性全部变为可选项 ?。
