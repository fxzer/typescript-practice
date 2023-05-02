// 1.内置类型 Uppercase、Lowercase、Capitalize、Uncapitalize
type ABBA = Uppercase<'abba'>; // "ABBA"
type abba = Lowercase<'ABBA'>; // "abba"

//首字母大小写
type Capitalize1 = Capitalize<'hello world'>; // "Hello world"
type Uncapitalize1 = Uncapitalize<'Hello world'>; // "hello world"

type Capitalize2 = Capitalize<'😎👍'>; // "😎👍"
type Uncapitalize2 = Uncapitalize<'😎👍'>; // "😎👍"

/* 自定义类型  */
type UppercaseCustom<T extends string> = T extends `${infer L}${infer R}` ? `${Uppercase<L>}${R}` : Uppercase<T>;

type LowercaseCustom<T extends string> = T extends `${infer L}${infer R}` ? `${Lowercase<L>}${R}` : Lowercase<T>;

type uc = UppercaseCustom<'a'>; // "A"
type lc = LowercaseCustom<'A'>; // "a"

//递归实现
type UppercaseRecursive<T> = T extends `${infer L}${infer R}` ? `${Uppercase<L>}${UppercaseRecursive<R>}` : T;
type ucs = UppercaseRecursive<'abba'>; // "ABBA"

type LowercaseRecursive<T> = T extends `${infer L}${infer R}` ? `${Lowercase<L>}${LowercaseRecursive<R>}` : T;
type lcs = LowercaseRecursive<'ABBA'>; // "abba"


type CapitalizeCustom<T extends string> = T extends `${infer L}${infer R}` ? `${Capitalize<L>}${R}` : Capitalize<T>;
type Capitalize3 = CapitalizeCustom<'hello world'>; 

type UncapitalizeCustom<T extends string> = T extends `${infer L}${infer R}` ? `${Uncapitalize<L>}${R}` : Uncapitalize<T>;
type Uncapitalize3 = UncapitalizeCustom<'Hello world'>;