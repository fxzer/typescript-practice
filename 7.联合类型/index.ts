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

/* 父子关系 */
type TParent =  'a' | 'b' | 'c';
type TChild = 'a' | 'b';
type isSub = TChild extends TParent ? true : false; //true


/* 联合类型条件判断 */

type FooCon<T> = T extends 'a' | 'b' ? `${T}1` : T;

type foores = FooCon<'a' | 'b' | 'c'> //  "c" | "a1" | "b1"

/* 接口泛型 推导 */
interface Cat {
  type: '🐱';
  food: string[]; 
}
interface Dog {
  type: '🐶';
  food: string[];
}
type Animal = Cat | Dog;

type LookUp<U, T> = U extends { type: T } ? U : never;

type lookres = LookUp<Animal, '🐶'> // Dog