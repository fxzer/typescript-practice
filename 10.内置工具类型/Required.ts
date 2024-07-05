// 使属性变为必填
type MyRequired<T> = {
  [P in keyof T]-?: T[P];
}

// 测试
interface Props {
  a?: number
  b?: string
}
type RequiredProps = Required<Props> // { a: number, b: string }
type RequiredProps1 = MyRequired<Props> // { a: number, b: string }
