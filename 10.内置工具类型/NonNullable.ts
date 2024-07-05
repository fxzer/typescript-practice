/** NonNullable :  剔除 undefined 和 null */
export type MyNonNullable<T> = T extends null | undefined ? never : T

export type T0 = NonNullable<string | number | undefined | null>
export type T1 = MyNonNullable<string | number | undefined | null>
