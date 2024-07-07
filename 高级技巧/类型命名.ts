// 1.类型单数形式
// 类型名应该是单数形式，因为它表示一个类型，而不是一组类型。
type Route = '/users' | '/posts' | '/comments' // 不用 Routes

const routes: Route[] = ['/users', '/posts', '/comments']

// 2.泛型命名提高可读性
/* type Reponse<T, U> = {
  data: T;
  error: U;
} */

// ==>
interface Reponse<TData, UError> {
  data: TData
  error: UError
}
