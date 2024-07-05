interface Todo {
  title: string
  description: string
  completed: boolean
}
export type TodoPreview = Pick<Todo, 'title' | 'completed'>

/** 实现  */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
}
export type TodoPreview2 = MyPick<Todo, 'title' | 'completed'>
