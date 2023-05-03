type TUnion1 = number | string;
let union1: TUnion1 = 1;
union1 = '1';

type TUnion2 = number | string | boolean;
let union2: TUnion2 = false
union2 = 1;

interface IUser {
  name: string,
  age: number,
}

interface IAdmin {
  name: string,
  privilege: string[],
}
type TUnion3 = IUser | IAdmin;


// type TUser  = {
//   name: string,
//   age: number,
// }

// type TAdmin  = {
//   name: string,
//   privilege: string[],
// }
// type TUnion4 = TUser | TAdmin;

let union3: TUnion3 = {
  name: 'tom',
  age: 18,
}
union3 = { 
  name: 'jerry',
  privilege: ['create-server', 'delete-server'],
}


//================== 交叉类型 vs  联合类型 ==================
 
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
