/* 复用type定义的类型 */
export interface Point {
  x: number
  y: number
}

export type Coordinate = Point & {
  z: number
}

const point: Point = { x: 1, y: 2 }
const coordinate: Coordinate = { x: 1, y: 2, z: 3 }

/* 复用interface定义的类型 */
export interface IPoint {
  x: number
  y: number
};

export interface ICoordinate extends Point {
  z: number
}

/* type复用interface定义的类型 */

export type TICoordinate = Point & {
  z: number
}

/* 处理参数数量和类型不固定的函数 : 函数重载 */
export function greet(name: string): string
export function greet(age: number): string
export function greet(value: any): string {
  if (typeof value === 'string') {
    return `Hello, ${value}`
  }
  else if (typeof value === 'number') {
    return `You are ${value} years old`
  }
  return ''
}

/* interface 扩展 */
export interface UserInfo {
  name: string
}
export interface UserInfo {
  age: number
}

export const userInfo: UserInfo = { name: '张三', age: 23 }
