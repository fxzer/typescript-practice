type MyPartial<T> = {
  [P in keyof T]?: T[P];
}

interface Todo {
  title: string
  description: string
}
export type TodoPreview = MyPartial<Todo>
export type TodoPreview1 = Partial<Todo>
