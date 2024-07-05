/*  Omit */
// 从 T 中排除 K
type MyOmit<T, K extends keyof any> = {
  [P in keyof T as P extends K ? never : P]: T[P];
}
// 测试
interface Todo {
  title: string
  description: string
  completed: boolean
}
export type TodoPreview = Omit<Todo, 'description' | 'completed'>
export type TodoPreview1 = MyOmit<Todo, 'description' | 'completed'>
