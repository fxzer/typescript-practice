/** Exclude：剔除联合类型 */
type MyExclude<T, U> = T extends U ? never : T

type T0 = MyExclude<'a' | 'b' | 'c', 'a'> // "b" | "c"
