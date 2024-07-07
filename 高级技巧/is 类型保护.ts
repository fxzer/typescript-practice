// 在函数中检查一个变量是否属于特定类型
function isString(value: string | number): value is string {
  return typeof value === 'string'
}

const value: string | number = 'Hello TypeScript'

if (isString(value)) {
  console.log(value.toUpperCase()) // 正常工作
}
else {
  console.log((value as number).toFixed(2)) // 正常工作
}

/* -- 案例 2  数组类型守卫-- */
interface Square {
  type: 'square'
  size: number
}
interface Rectangle {
  type: 'rectangle'
  width: number
  height: number
}

type Shape = Square | Rectangle

const shapes: Shape[] = [
  { type: 'square', size: 10 },
  { type: 'rectangle', width: 10, height: 20 },
]

const square = shapes.find(shape => shape.type === 'square')
// square?.size //  类型“Rectangle”上不存在属性“size”。

// 为了解决这个问题，我们可以使用类型守卫来区分类型  shape is Square
function isSquare(shape: Shape): shape is Square {
  return shape.type === 'square'
}

const square2 = shapes.find(isSquare)
// square2?.size // number | undefined
