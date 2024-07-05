/** Extract： 提取联合类型  */
type MyExtract<T, U> = T extends U ? T : never

/**  */
export type T0 = Extract<'a' | 'b' | 'c', 'a'> // "a"
export type T1 = MyExtract<'a' | 'b' | 'c', 'a'> // "a"
