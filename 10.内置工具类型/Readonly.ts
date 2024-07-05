export type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
}

interface Todo {
  title: string
  description: string
}
type ReadonlyTodo = Readonly<Todo> // { readonly title: string, readonly description: string }
type ReadonlyTodo1 = MyReadonly<Todo> // { readonly title: string, readonly description: string }
