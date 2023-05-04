type Person = {
  name: string;
  age: number;
  id: number;
}

// Pick 挑选出指定属性，生成新对象类型
type UserInfo = Pick<Person, 'name' | 'age'>; // 挑选出 { name: string; age: number }

// Omit 排除指定的属性，生成新的对象类型
type UserInfo2 = Omit<Person, 'id'>; // 排除 id，生成  { name: string; age: number }

// Partial 将对象所有属性变为可选
type PartialPerson = Partial<Person>; // { name?: string; age?: number; id?: number }

// Readonly 将对象所有属性变为只读
type ReadonlyPerson = Readonly<Person>; // { readonly name: string; readonly age: number; readonly id: number }

// Record 生成对象类型，例如
type PersonMap = Record<number, Person>; // { [index: number]: Person }

type PersonMap3 = Record<'name', string>; // { name: string; }

// Exclude 排除一些联合类型
type UserInfoKeys = Exclude<keyof Person, 'id'>; // 'name' | 'age'