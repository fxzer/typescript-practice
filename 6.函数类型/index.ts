/* 参数为基本类型、参数默认值 */
function func1(x: number, y: number = 12): number {
  return x + y
}

const arrowFunc1 = (x: number, y: number = 10): number => x + y

/* 参数为对象 */
interface IPoint {
  x: number;
  y: number;
}
function func2(point: IPoint): number {
  return point.x + point.y
}
const arrowFunc2 = (point: IPoint): number => point.x + point.y

/*  对象中的方法中的 this*/
interface Person {
  name: string;
  age: number;
  sayHi: (fname: string) => void;
}

const person1: Person = {
  name: 'tom',
  age: 18,
  sayHi(this: Person, fname: string) { //this: Person 限定this的类型，才会有提示
    console.log(`hi,${fname},my name is ${this.name}!`)
  }
}
person1.sayHi('jerry')

/* 函数重载 */
type User =  {name:string,age:number}
let user:Array<User> = [
  {
  name:'tom',
  age:18
},
  {
  name:'jack',
  age:19
},
  {
  name:'tom',
  age:18
},
  {
  name:'tom',
  age:20
},

]
function getUser():User[] 
function getUser(name:string):User[] 
function getUser(names:string[]):User[] 
function getUser(names?:string | string[]):User[]{
  if(typeof names === 'string'){
    return user.filter(item => item.name === names)
  }else if(Array.isArray(names)){
    return user.filter(item => names.includes(item.name))
  }else{
    return user
  }
}

const users = getUser('tom')
console.log("[ users ]-69", users);

const users2 = getUser(['tom','jack'])
console.log("[ users2 ]-72", users2);