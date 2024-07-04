type TIntersection1 = number & string // never
type Intersection2 = '' & string
const str: Intersection2 = ''
// str = '1'; // 报错

/* 接口交叉，会把属性合并 方式一： */
type Intersection3 = { name: string } & { age: number }
const intersection3: Intersection3 = {
  name: 'tom',
  age: 18,
}

interface IUser {
  name: string
  age: number
}

interface IAdmin {
  name: string
  privilege: string[]
}
type TIntersection3 = IUser & IAdmin

/* 方式二
type TUser  = {
  name: string,
  age: number,
}

type TAdmin  = {
  name: string,
  privilege: string[],
}
type TIntersection4 = TUser & TAdmin; */

const intersection4: TIntersection3 = {
  name: 'tom',
  age: 18,
  privilege: ['create-server', 'delete-server'],
}
/* intersection4 = {  报错
  name: 'jerry',
  age: 20,
} */
