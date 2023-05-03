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